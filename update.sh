#!/usr/bin/env bash
# Update the Blowfish theme submodule to the latest commit on its tracked
# branch and commit the new pointer. Nothing is pushed: check the build first,
# then push yourself.
set -euo pipefail

cd "$(dirname "$0")"

git submodule update --init --remote --merge themes/blowfish

if git diff --quiet -- themes/blowfish; then
  echo "Blowfish is already up to date."
  exit 0
fi

git add themes/blowfish
git commit -m "Update Blowfish theme" -- themes/blowfish

echo "Committed the theme update. Next:"
echo "  1. check the Hugo range in themes/blowfish/config.toml ([module.hugoVersion])"
echo "  2. build: hugo -d ./public --baseURL https://chilichip.eu"
echo "  3. push when it builds cleanly: git push"
