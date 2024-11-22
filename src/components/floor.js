import * as THREE from "three";

export default function createFloor(floorTextures, scene) {
  const floorGeometry = new THREE.PlaneGeometry(20, 20);
  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorTextures[0],
    aoMap: floorTextures[1],
    roughnessMap: floorTextures[1],
    metalnessMap: floorTextures[1],
    normalMap: floorTextures[2],
    alphaMap: floorTextures[3],
    transparent: true,
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  scene.add(floor);
  floor.receiveShadow = true;
  floor.rotation.x = Math.PI * 1.5;
  floor.position.set(0, -0.5, 0);
}
