import { Canvas } from "@react-three/fiber";
import { ARButton, XR} from "@react-three/xr";
import Box from "./Box";
// import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import { ModelMap } from "./3D_models/modelMap";
import s from "./AR.styles";
import { Scene } from "./3D_models/Scene";

export function AugmentedReality() {
  return (
    <s.canvasContainer>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          {/* <MarioFloorLamp position={[0, 0, -2]} /> */}
          <Box position={[3, 0, -10]} />
          <Scene threeD={ModelMap[1]}/>
          {/* <threeD/> */}
        </XR>
      </Canvas>
      <ARButton />
      {/* <ARButton sessionInit = {{
      domOverlay: typeof document !== "undefined" ? { root: document.body } : void 0,
      optionalFeatures: ["hit-test", "dom-overlay", "dom-overlay-for-handheld-ar"]
    }}/> */}
      {/* <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} /> */}
    </s.canvasContainer>
  );
}
