import * as THREE from "three";

export function loadTextures() {
  // Textures
  const textureLoader = new THREE.TextureLoader();
  // Wood Textures
  const oakColorTexture = textureLoader.load(
    "../static/textures-wood/oak_veneer_01_diff_1k.webp"
  );
  oakColorTexture.colorSpace = THREE.SRGBColorSpace;
  const oakARMTexture = textureLoader.load(
    "../static/textures-wood/oak_veneer_01_arm_1k.webp"
  );

  const oakNormalTexture = textureLoader.load(
    "../static/textures-wood/oak_veneer_01_nor_gl_1k.webp"
  );

  const rosewoodColorTexture = textureLoader.load(
    "../static/textures-wood/rosewood_veneer1_diff_1k.webp"
  );
  rosewoodColorTexture.colorSpace = THREE.SRGBColorSpace;
  const rosewoodARMTexture = textureLoader.load(
    "../static/textures-wood/rosewood_veneer1_arm_1k.webp"
  );

  const rosewoodNormalTexture = textureLoader.load(
    "../static/textures-wood/rosewood_veneer1_nor_gl_1k.webp"
  );

  const darkWoodColorTexture = textureLoader.load(
    "../static/textures-wood/dark_wood_diff_1k.webp"
  );
  darkWoodColorTexture.colorSpace = THREE.SRGBColorSpace;
  const darkWoodARMTexture = textureLoader.load(
    "../static/textures-wood/dark_wood_arm_1k.webp"
  );

  const darkWoodNormalTexture = textureLoader.load(
    "../static/textures-wood/dark_wood_nor_gl_1k.webp"
  );
  const woodTextures = {
    oak: [oakColorTexture, oakARMTexture, oakNormalTexture],
    rosewood: [rosewoodColorTexture, rosewoodARMTexture, rosewoodNormalTexture],
    darkWood: [darkWoodColorTexture, darkWoodARMTexture, darkWoodNormalTexture],
  };

  // Leather Textures
  const redColorTexture = textureLoader.load(
    "../static/textures-leather/leather_red_03_coll1_1k.webp"
  );
  redColorTexture.colorSpace = THREE.SRGBColorSpace;
  const redARMTexture = textureLoader.load(
    "../static/textures-leather/leather_red_03_arm_1k.webp"
  );
  const redNormalTexture = textureLoader.load(
    "../static/textures-leather/leather_red_03_nor_gl_1k.webp"
  );

  const brownColorTexture = textureLoader.load(
    "../static/textures-leather/brown_leather_albedo_1k.webp"
  );
  brownColorTexture.colorSpace = THREE.SRGBColorSpace;
  const brownARMTexture = textureLoader.load(
    "../static/textures-leather/brown_leather_arm_1k.webp"
  );
  const brownNormalTexture = textureLoader.load(
    "../static/textures-leather/brown_leather_nor_gl_1k.webp"
  );

  const whiteColorTexture = textureLoader.load(
    "../static/textures-leather/leather_white_diff_1k.webp"
  );
  whiteColorTexture.colorSpace = THREE.SRGBColorSpace;
  const whiteARMTexture = textureLoader.load(
    "../static/textures-leather/leather_white_arm_1k.webp"
  );
  const whiteNormalTexture = textureLoader.load(
    "../static/textures-leather/leather_white_nor_gl_1k.webp"
  );
  const leatherTextures = {
    red: [redColorTexture, redARMTexture, redNormalTexture],
    white: [whiteColorTexture, whiteARMTexture, whiteNormalTexture],
    brown: [brownColorTexture, brownARMTexture, brownNormalTexture],
  };

  // Fabric Textures
  const fabricRedColorTexture = textureLoader.load(
    "../static/textures-fabric/fabric_pattern_07_col_1_1k.webp"
  );
  const fabricBlueColorTexture = textureLoader.load(
    "../static/textures-fabric/fabric_pattern_07_col_2_1k.webp"
  );
  const fabricGreenColorTexture = textureLoader.load(
    "../static/textures-fabric/fabric_pattern_07_col_3_1k.webp"
  );
  fabricRedColorTexture.colorSpace = THREE.SRGBColorSpace;
  fabricBlueColorTexture.colorSpace = THREE.SRGBColorSpace;
  fabricGreenColorTexture.colorSpace = THREE.SRGBColorSpace;
  const fabricARMTexture = textureLoader.load(
    "../static/textures-fabric/fabric_pattern_07_arm_1k.webp"
  );
  const fabricNormalTexture = textureLoader.load(
    "../static/textures-fabric/fabric_pattern_07_nor_gl_1k.webp"
  );

  const fabricTextures = {
    red: [fabricRedColorTexture, fabricARMTexture, fabricNormalTexture],
    blue: [fabricBlueColorTexture, fabricARMTexture, fabricNormalTexture],
    green: [fabricGreenColorTexture, fabricARMTexture, fabricNormalTexture],
  };

  // Floor Textures
  const floorColorTexture = textureLoader.load(
    "../static/textures-floor/weathered_brown_planks_diff_1k.jpg"
  );
  floorColorTexture.repeat.set(4, 4);
  floorColorTexture.wrapS = THREE.RepeatWrapping;
  floorColorTexture.wrapT = THREE.RepeatWrapping;
  floorColorTexture.colorSpace = THREE.SRGBColorSpace;
  const floorARMTexture = textureLoader.load(
    "../static/textures-floor/weathered_brown_planks_arm_1k.jpg"
  );
  floorARMTexture.repeat.set(4, 4);
  floorARMTexture.wrapS = THREE.RepeatWrapping;
  floorARMTexture.wrapT = THREE.RepeatWrapping;
  const floorNormalTexture = textureLoader.load(
    "../static/textures-floor/weathered_brown_planks_nor_gl_1k.jpg"
  );
  floorNormalTexture.repeat.set(4, 4);
  floorNormalTexture.wrapS = THREE.RepeatWrapping;
  floorNormalTexture.wrapT = THREE.RepeatWrapping;
  const floorAlphaTexture = textureLoader.load(
    "../static/textures-floor/alpha.webp"
  );
  const floorTextures = [
    floorColorTexture,
    floorARMTexture,
    floorNormalTexture,
    floorAlphaTexture,
  ];

  return {
    woodTextures,
    leatherTextures,
    fabricTextures,
    floorTextures,
  };
}
