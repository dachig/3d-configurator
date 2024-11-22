import * as THREE from "three";
import createChair from "./components/chair.js";
import createFloor from "./components/floor.js";
import createlights from "./components/lights.js";
import createOrbitControls from "./components/orbitControls.js";

export function initScene(
  container,
  chairMaterial,
  pillowMaterial,
  chairType,
  floorTextures
) {
  // Canvas
  const canvas = document.querySelector("canvas.webgl");
  // Create Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 2.5;
  camera.position.x = -0.5;
  camera.position.y = 1.5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Create controls, lights, floor and chair
  const controls = createOrbitControls(camera, canvas);
  createlights(scene);
  createFloor(floorTextures, scene);
  createChair(chairMaterial, pillowMaterial, chairType, scene);

  // Tick-function
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Handle resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}
