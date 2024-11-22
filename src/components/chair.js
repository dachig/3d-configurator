import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// chairStructureGroup
export default function createChair(
  chairMaterial,
  pillowMaterial,
  chairType,
  scene
) {
  const chairStructureGroup = new THREE.Group();
  scene.add(chairStructureGroup);
  const materialStructure = new THREE.MeshStandardMaterial({
    map: chairMaterial[0],
    aoMap: chairMaterial[1],
    roughnessMap: chairMaterial[1],
    metalnessMap: chairMaterial[1],
    normalMap: chairMaterial[2],
  });
  // legs
  const legsGeometry = new THREE.BoxGeometry(0.1, 1, 0.1, 25, 25, 25);
  const legRightBack = new THREE.Mesh(legsGeometry, materialStructure);
  legRightBack.position.set(-0.5, 0, -0.5);
  const legLeftBack = new THREE.Mesh(legsGeometry, materialStructure);
  legLeftBack.position.set(0.5, 0, -0.5);
  const legRightFront = new THREE.Mesh(legsGeometry, materialStructure);
  legRightFront.position.set(-0.5, 0, 0.5);
  const legLeftFront = new THREE.Mesh(legsGeometry, materialStructure);
  legLeftFront.position.set(0.5, 0, 0.5);
  // seat
  const seatGeometry = new THREE.BoxGeometry(1.101, 0.1, 1.11, 25, 25, 25);
  const seat = new THREE.Mesh(seatGeometry, materialStructure);
  seat.castShadow = true;
  seat.position.set(0, 0.5, 0);

  // back
  const sidesBackGeometry = new THREE.BoxGeometry(0.1, 1.35, 0.1, 25, 25, 25);
  const sideLeft = new THREE.Mesh(sidesBackGeometry, materialStructure);
  sideLeft.position.set(0.5, 1.2, -0.57);
  sideLeft.rotation.x = -0.1;
  const sideRight = new THREE.Mesh(sidesBackGeometry, materialStructure);
  sideRight.position.set(-0.5, 1.2, -0.57);
  sideRight.rotation.x = -0.1;
  // backSupport
  const backSupportGeometry = new THREE.BoxGeometry(0.15, 1, 0.08, 25, 25, 25);
  const backSupportTop = new THREE.Mesh(backSupportGeometry, materialStructure);
  backSupportTop.rotation.z = Math.PI / 2;
  backSupportTop.rotation.x = -0.1;
  backSupportTop.position.set(0, 1.7, -0.62);
  const backSupportBottom = new THREE.Mesh(
    backSupportGeometry,
    materialStructure
  );
  backSupportBottom.rotation.z = Math.PI / 2;
  backSupportBottom.rotation.x = -0.1;
  backSupportBottom.position.set(0, 0.85, -0.535);

  const backSupportCenter1 = new THREE.Mesh(
    backSupportGeometry,
    materialStructure
  );
  backSupportCenter1.rotation.x = -0.1;
  backSupportCenter1.position.set(-0.25, 1.3, -0.58);
  backSupportCenter1.scale.setScalar(0.75);

  const backSupportCenter2 = new THREE.Mesh(
    backSupportGeometry,
    materialStructure
  );
  backSupportCenter2.rotation.x = -0.1;
  backSupportCenter2.position.set(0, 1.3, -0.58);
  backSupportCenter2.scale.setScalar(0.75);

  const backSupportCenter3 = new THREE.Mesh(
    backSupportGeometry,
    materialStructure
  );
  backSupportCenter3.rotation.x = -0.1;
  backSupportCenter3.position.set(0.25, 1.3, -0.58);
  backSupportCenter3.scale.setScalar(0.75);

  chairStructureGroup.add(
    legRightBack,
    legLeftBack,
    legRightFront,
    legLeftFront,
    seat,
    sideLeft,
    sideRight,
    backSupportTop,
    backSupportBottom,
    backSupportCenter1,
    backSupportCenter2,
    backSupportCenter3
  );

  // chairArmsGroup
  const chairArmsGroup = new THREE.Group();
  scene.add(chairArmsGroup);
  // armRest
  const armRestGeometry = new THREE.BoxGeometry(0.08, 0.08, 0.9);
  const armRestRight = new THREE.Mesh(armRestGeometry, materialStructure);
  armRestRight.position.set(-0.5, 1.1, -0.1);
  const armRestLeft = new THREE.Mesh(armRestGeometry, materialStructure);
  armRestLeft.position.set(0.5, 1.1, -0.1);
  // armSupport
  const armSupportGeometry = new THREE.BoxGeometry(0.078, 0.6, 0.08);
  const armSupportRight = new THREE.Mesh(armSupportGeometry, materialStructure);
  armSupportRight.position.set(-0.5, 0.8, 0.2);
  armSupportRight.rotation.x = -0.1;
  const armSupportLeft = new THREE.Mesh(armSupportGeometry, materialStructure);
  armSupportLeft.position.set(0.5, 0.8, 0.2);
  armSupportLeft.rotation.x = -0.1;

  // pillowsGroup
  const pillowsGroup = new THREE.Group();
  scene.add(pillowsGroup);
  const materialPillows = new THREE.MeshStandardMaterial({
    map: pillowMaterial[0],
    aoMap: pillowMaterial[1],
    roughnessMap: pillowMaterial[1],
    metalnessMap: pillowMaterial[1],
    normalMap: pillowMaterial[2],
  });
  // seatPillow
  const seatPillowGeometry = new RoundedBoxGeometry(0.9, 0.1, 1);
  const seatPillow = new THREE.Mesh(seatPillowGeometry, materialPillows);
  seatPillow.position.set(0, 0.55, 0);
  // backPillow
  const backPillowCenterGeometry = new RoundedBoxGeometry(0.12, 0.85, 0.1);
  const backPillowCenter1 = new THREE.Mesh(
    backPillowCenterGeometry,
    materialPillows
  );
  backPillowCenter1.rotation.x = -0.1;
  backPillowCenter1.position.set(-0.25, 1.28, -0.57);
  backPillowCenter1.scale.setScalar(0.75);

  const backPillowCenter2 = new THREE.Mesh(
    backPillowCenterGeometry,
    materialPillows
  );
  backPillowCenter2.rotation.x = -0.1;
  backPillowCenter2.position.set(0, 1.28, -0.57);
  backPillowCenter2.scale.setScalar(0.75);

  const backPillowCenter3 = new THREE.Mesh(
    backPillowCenterGeometry,
    materialPillows
  );
  backPillowCenter3.rotation.x = -0.1;
  backPillowCenter3.position.set(0.25, 1.28, -0.57);
  backPillowCenter3.scale.setScalar(0.75);
  // armRestPillow
  const armRestPillowGeometry = new RoundedBoxGeometry(0.07, 0.05, 0.75);
  const armRestPillowRight = new THREE.Mesh(
    armRestPillowGeometry,
    materialPillows
  );
  armRestPillowRight.position.set(-0.5, 1.135, -0.075);

  const armRestPillowLeft = new THREE.Mesh(
    armRestPillowGeometry,
    materialPillows
  );
  armRestPillowLeft.position.set(0.5, 1.135, -0.075);

  pillowsGroup.add(
    seatPillow,
    backPillowCenter1,
    backPillowCenter2,
    backPillowCenter3
  );

  if (chairType == "classic") {
    chairArmsGroup.remove(
      armRestPillowRight,
      armRestPillowLeft,
      armRestRight,
      armRestLeft,
      armSupportRight,
      armSupportLeft
    );
  } else {
    chairArmsGroup.add(
      armRestPillowRight,
      armRestPillowLeft,
      armRestRight,
      armRestLeft,
      armSupportRight,
      armSupportLeft
    );
  }
}
