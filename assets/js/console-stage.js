// Interactive 3D VGC Zero for the landing page hero.
// Port of the console stage on the chili platform landing page
// (chili-platform-frontend src/app/features/landing/console-stage.ts and console-model.ts),
// so both sites show the same model, lighting and screen animation.
// The hero image stays underneath as the fallback when WebGL or the model is unavailable.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL = '/models/vgc-zero.glb';
const SCREEN_FRAME_URLS = ['/models/console-screen-0.png', '/models/console-screen-1.png'];
const SCREEN_FRAME_MS = 400;
/** Longest axis after normalize. */
const TARGET_SIZE = 5.5;
/** The hero card is 4:3, not the platform's tall column, so the camera sits closer. */
const CAMERA_ZOOM = 1.35;

for (const stage of document.querySelectorAll('[data-console-stage]')) {
  void mount(stage);
}

async function mount(stage) {
  const canvas = stage.querySelector('canvas');
  if (!canvas) {
    return;
  }
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedQuery.matches;
  reducedQuery.addEventListener('change', (event) => {
    reduced = event.matches;
  });

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return;
  }
  if (!renderer.getContext()) {
    renderer.dispose();
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 200);

  let root;
  try {
    root = await loadVgcZeroModel();
  } catch {
    renderer.dispose();
    return;
  }
  scene.add(root);

  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(root);
  const focus = bounds.getCenter(new THREE.Vector3());
  const sphere = bounds.getBoundingSphere(new THREE.Sphere());
  const fitDistance =
    (sphere.radius || 0.5) / Math.sin((camera.fov * Math.PI) / 360) / CAMERA_ZOOM;
  camera.near = Math.max(0.01, fitDistance / 100);
  camera.far = fitDistance * 20;
  camera.position.set(
    focus.x + fitDistance * 0.08,
    focus.y + sphere.radius * 0.35,
    focus.z + fitDistance * 1.05,
  );
  camera.lookAt(focus);
  const modelBaseY = root.position.y;
  root.rotation.order = 'YXZ';

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8),
    new THREE.ShadowMaterial({ opacity: 0.38 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = focus.y - sphere.radius * 0.92;
  ground.receiveShadow = true;
  scene.add(ground);

  scene.add(new THREE.AmbientLight(0xc5cedd, 0.75));
  const key = new THREE.DirectionalLight(0xfff6ee, 3.6);
  key.position.set(2.8, 4.6, 4.2);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 16;
  key.shadow.camera.left = -2.5;
  key.shadow.camera.right = 2.5;
  key.shadow.camera.top = 2.5;
  key.shadow.camera.bottom = -2.5;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xff3b3b, 1.15);
  rim.position.set(-3.5, 1.6, -2.4);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0x7dffb3, 0.5);
  fill.position.set(-2.2, 0.4, 3.2);
  scene.add(fill);

  // Drag to turn
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let yaw = 0.12;
  let pitch = -0.22;
  const stopDrag = () => {
    dragging = false;
  };
  canvas.addEventListener('pointerdown', (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!dragging) {
      return;
    }
    yaw += (event.clientX - lastX) * 0.008;
    pitch = clamp(pitch + (event.clientY - lastY) * 0.005, -0.7, 0.45);
    lastX = event.clientX;
    lastY = event.clientY;
  });
  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);
  canvas.addEventListener('lostpointercapture', stopDrag);

  const resize = () => {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    if (width === 0 || height === 0) {
      return;
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  let bobTime = 0;
  let lastStamp = performance.now();
  const frame = (now) => {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - lastStamp) / 1000);
    lastStamp = now;
    bobTime += dt;
    root.rotation.y = yaw;
    root.rotation.x = pitch;
    root.position.y = modelBaseY + (reduced ? 0 : Math.sin(bobTime * 1.35) * 0.06);
    renderer.render(scene, camera);
  };
  renderer.render(scene, camera);
  stage.classList.add('is-live');
  requestAnimationFrame(frame);
}

async function loadVgcZeroModel() {
  const loader = new GLTFLoader();
  const [gltf, screen] = await Promise.all([loader.loadAsync(MODEL_URL), loadScreenTexture()]);

  const root = new THREE.Group();
  const scaled = new THREE.Group();
  const offset = new THREE.Group();
  const orient = new THREE.Group();
  orient.rotation.set(Math.PI / 2 - 0.35, 0.55, 0);
  orient.add(gltf.scene);
  offset.add(orient);
  scaled.add(offset);
  root.add(scaled);

  const displays = [];
  root.traverse((object) => {
    if (!object.isMesh) {
      return;
    }
    const mesh = object;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.geometry.computeVertexNormals();

    const sourceMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const nextMaterials = sourceMaterials.map((material) => {
      const color =
        material instanceof THREE.MeshStandardMaterial
          ? material.color.clone()
          : new THREE.Color(0x6f7d96);
      color.offsetHSL(0, 0.04, 0.14);
      return new THREE.MeshStandardMaterial({
        color,
        metalness: 0.12,
        roughness: 0.62,
        dithering: false,
        side: THREE.FrontSide,
      });
    });
    mesh.material = nextMaterials.length === 1 ? nextMaterials[0] : nextMaterials;
    if (isDisplayMesh(mesh)) {
      displays.push(mesh);
    }
  });

  for (const display of displays) {
    createScreenOverlay(display, screen);
  }

  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(orient);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  offset.position.copy(center).multiplyScalar(-1);

  const maxDim = Math.max(size.x, size.y, size.z, 0.001);
  scaled.scale.setScalar(TARGET_SIZE / maxDim);
  root.updateMatrixWorld(true);
  return root;
}

function isDisplayMesh(mesh) {
  mesh.geometry.computeBoundingBox();
  const box = mesh.geometry.boundingBox;
  if (!box) {
    return false;
  }
  const size = box.getSize(new THREE.Vector3());
  const [thin, mid, long] = [size.x, size.y, size.z].sort((a, b) => a - b);
  return thin < mid * 0.2 && mid / long > 0.85 && mid > 15;
}

function createScreenOverlay(mesh, texture) {
  mesh.geometry.computeBoundingBox();
  const box = mesh.geometry.boundingBox;
  if (!box) {
    return;
  }
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const axes = ['x', 'y', 'z'];
  axes.sort((a, b) => size[b] - size[a]);
  const [uAxis, vAxis, thinAxis] = axes;
  const inset = 0.92;
  const overlay = new THREE.Mesh(
    new THREE.PlaneGeometry(size[uAxis] * inset, size[vAxis] * inset),
    new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
  );
  overlay.position.copy(center);
  overlay.position[thinAxis] = box.max[thinAxis] + Math.max(size[thinAxis] * 0.35, 0.2);
  overlay.renderOrder = 2;
  if (thinAxis === 'x') {
    overlay.rotation.y = Math.PI / 2;
  } else if (thinAxis === 'y') {
    overlay.rotation.x = -Math.PI / 2;
  }
  mesh.add(overlay);
}

async function loadScreenTexture() {
  const images = await Promise.all(SCREEN_FRAME_URLS.map(loadImage));
  const canvas = document.createElement('canvas');
  canvas.width = images[0]?.naturalWidth || 512;
  canvas.height = images[0]?.naturalHeight || 512;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Screen canvas unavailable');
  }
  context.imageSmoothingEnabled = false;

  let frame = 0;
  const draw = () => {
    context.drawImage(images[frame], 0, 0, canvas.width, canvas.height);
  };
  draw();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  window.setInterval(() => {
    frame = (frame + 1) % images.length;
    draw();
    texture.needsUpdate = true;
  }, SCREEN_FRAME_MS);
  return texture;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load ${url}`));
    image.src = url;
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
