import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function createOrbitControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.target.set(0, 0.75, 0);
  controls.maxDistance = 2.5;
  controls.minDistance = 1.5;
  controls.minPolarAngle = Math.PI / 4;
  controls.maxPolarAngle = Math.PI / 2;

  return controls;
}
