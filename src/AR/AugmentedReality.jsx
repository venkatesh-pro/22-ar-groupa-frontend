import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Box from "./Box";
import { MarioLamp } from "./MarioLamp";
import s from "./AR.styles"

export function AugmentedReality() {
  return (
    <s.canvasContainer>
      <Canvas camera={{position: [0, 0, 2]}}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          <MarioLamp position={[0, 0, -2]}/>
          <Box position={[3, 0, -10]}/>
        </XR>
      </Canvas>
      <ARButton/>
    </s.canvasContainer>
  );
};
