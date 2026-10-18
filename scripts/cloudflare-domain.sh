#!/usr/bin/env bash
# Attach or detach a chilichip.eu hostname to a Cloudflare Pages project.
#
#   scripts/cloudflare-domain.sh attach <hostname> <target.pages.dev>
#   scripts/cloudflare-domain.sh detach <hostname>
#
# attach adds <hostname> as a custom domain of the Pages project and points a
# proxied CNAME at <target> (the production or a branch-alias pages.dev host).
# Both steps are idempotent. Needs CLOUDFLARE_API_TOKEN (Pages: Edit, DNS: Edit
# on chilichip.eu), CLOUDFLARE_ACCOUNT_ID, PAGES_PROJECT and ZONE_NAME.
set -euo pipefail

API=https://api.cloudflare.com/client/v4
action=$1 host=$2 target=${3:-}

cf() { # method path [json]
  curl -sS -X "$1" "$API$2" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" ${3:+--data "$3"}
}
ok() { # print Cloudflare's errors when a call fails
  local res; res=$(cat)
  jq -e '.success' >/dev/null <<<"$res" && return 0
  echo "::error::Cloudflare API call failed: $(jq -c '.errors' <<<"$res" 2>/dev/null || echo "$res")" >&2
  return 1
}

zones=$(cf GET "/zones?name=$ZONE_NAME")
ok <<<"$zones"
zone_id=$(jq -r '.result[0].id // empty' <<<"$zones")
[ -n "$zone_id" ] || { echo "::error::Zone $ZONE_NAME not found for this token"; exit 1; }
domains="/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$PAGES_PROJECT/domains"
records=$(cf GET "/zones/$zone_id/dns_records?type=CNAME&name=$host")
ok <<<"$records"
record_id=$(jq -r '.result[0].id // empty' <<<"$records")

case $action in
  attach)
    if ! cf GET "$domains/$host" | jq -e '.success' >/dev/null; then
      cf POST "$domains" "{\"name\":\"$host\"}" | ok
    fi
    record="{\"type\":\"CNAME\",\"name\":\"$host\",\"content\":\"$target\",\"proxied\":true,\"comment\":\"$PAGES_PROJECT Pages\"}"
    if [ -n "$record_id" ]; then
      cf PUT "/zones/$zone_id/dns_records/$record_id" "$record" | ok
    else
      cf POST "/zones/$zone_id/dns_records" "$record" | ok
    fi
    echo "Attached https://$host -> $target"
    ;;
  detach)
    cf DELETE "$domains/$host" >/dev/null || true
    [ -z "$record_id" ] || cf DELETE "/zones/$zone_id/dns_records/$record_id" | ok
    echo "Detached $host"
    ;;
  *) echo "usage: $0 attach|detach <hostname> [target]" >&2; exit 2 ;;
esac
