import { Canvas } from "@react-three/fiber";
import { ARButton, XR} from "@react-three/xr";
import Box from "./Box";
import { ModelMap } from "./3D_models/models";
import s from "./AR.styles";
import { Scene } from "./3D_models/Scene";
import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";


export function AugmentedReality() {
  return (
    <s.canvasContainer>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          <Box position={[3, 0, -10]} />
          {/* <MarioFloorLamp/> */}
          <Scene threeD={ModelMap[2]}/>
        </XR>
      </Canvas>
      <ARButton />
    </s.canvasContainer>
  );
}
