import * as THREE from "three"
;
export default function createlights(scene) {
  // Ambient light
  const ambientLight = new THREE.AmbientLight("#86cdff", 0.5);
  scene.add(ambientLight);

  // Point light
  const pointLight = new THREE.PointLight("white", 2, 8, 0);
  pointLight.position.set(0, 2.5, 1);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 516;
  pointLight.shadow.mapSize.height = 516;
  pointLight.shadow.camera.near = 0.1;
  pointLight.shadow.camera.far = 4;
  scene.add(pointLight);
  scene.fog = new THREE.FogExp2("black", 0.1);

  const pointLight2 = new THREE.RectAreaLight("white", 1);
  pointLight2.position.set(0, 1.5, 3);
  scene.add(pointLight2);
}
