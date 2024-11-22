import { useEffect, useRef, useState } from "react";
import { initScene } from "./script.js";
import { loadTextures } from "./lib/loadTextures.js";
import "./index.css";

const App = () => {
  const textures = loadTextures();
  const containerRef = useRef(null);
  const [chairType, setChairType] = useState("classic");
  const [pillowType, setPillowType] = useState("leather");
  const [chairMaterial, setChairMaterial] = useState(textures.woodTextures.oak);
  const [pillowMaterial, setPillowMaterial] = useState(
    textures.leatherTextures.white
  );
  useEffect(() => {
    if (containerRef.current) {
      initScene(
        containerRef.current,
        chairMaterial,
        pillowMaterial,
        chairType,
        textures.floorTextures
      );
    }
  }, [chairMaterial, pillowMaterial, chairType]);
  return (
    <div>
      <div
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        ref={containerRef}
      />
      <div id="configuratorUI">
        <div id="chairMaterial">
          <p style={{ fontWeight: "bold", color: "white" }}>WOOD</p>
          <div id="woodContainer">
            <img
              style={{ width: 50, height: 50 }}
              src="./oak_veneer_01.webp"
              onClick={() => setChairMaterial(textures.woodTextures.oak)}
            />
            <img
              style={{ width: 50, height: 50 }}
              src="./rosewood_veneer1.webp"
              onClick={() => setChairMaterial(textures.woodTextures.rosewood)}
            />
            <img
              style={{ width: 50, height: 50 }}
              src="./wood_table_001.webp"
              onClick={() => setChairMaterial(textures.woodTextures.darkWood)}
            />
          </div>
          <div id="buttonsContainer">
            <button
              onClick={() => setPillowType("leather")}
              style={
                pillowType == "leather" ? { color: "white" } : { color: "grey" }
              }
            >
              LEATHER
            </button>
            <button
              onClick={() => setPillowType("fabric")}
              style={
                pillowType == "leather" ? { color: "grey" } : { color: "white" }
              }
            >
              FABRIC
            </button>
          </div>
          {pillowType == "leather" ? (
            <div id="leatherContainer">
              <img
                style={{ width: 50, height: 50 }}
                src="./leather_white.webp"
                onClick={() =>
                  setPillowMaterial(textures.leatherTextures.white)
                }
              />
              <img
                style={{ width: 50, height: 50 }}
                src="./leather_red_03.webp"
                onClick={() => setPillowMaterial(textures.leatherTextures.red)}
              />
              <img
                style={{ width: 50, height: 50 }}
                src="./brown_leather.webp"
                onClick={() =>
                  setPillowMaterial(textures.leatherTextures.brown)
                }
              />
            </div>
          ) : (
            <div id="fabricContainer">
              <img
                style={{ width: 50, height: 50 }}
                src="./static/textures-fabric/fabric_pattern_07_col_1_1k.webp"
                onClick={() => setPillowMaterial(textures.fabricTextures.red)}
              />
              <img
                style={{ width: 50, height: 50 }}
                src="./static/textures-fabric/fabric_pattern_07_col_2_1k.webp"
                onClick={() => setPillowMaterial(textures.fabricTextures.blue)}
              />
              <img
                style={{ width: 50, height: 50 }}
                src="./static/textures-fabric/fabric_pattern_07_col_3_1k.webp"
                onClick={() => setPillowMaterial(textures.fabricTextures.green)}
              />
            </div>
          )}
          <div id="buttonsContainer">
            <button
              onClick={() => setChairType("classic")}
              style={
                chairType == "classic" ? { color: "white" } : { color: "grey" }
              }
            >
              CLASSIC
            </button>
            <button
              onClick={() => setChairType("relaxed")}
              style={
                chairType == "classic" ? { color: "grey" } : { color: "white" }
              }
            >
              RELAXED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
