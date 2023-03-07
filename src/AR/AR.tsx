import { Canvas } from "@react-three/fiber";
import { XR, XRButton } from "@react-three/xr";
import Box from "./Box";
// import Image from "./Image"
import { MarioLamp } from "./MarioLamp";
import s from "./AR.styles"

const AR = () => {
  
  return (
    <s.canvasContainer>
      <Canvas camera={{position: [0, 0, 2]}}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[1.2, -3, 0]} /> */}
          <MarioLamp position={[0, 0, -2]}/>
        </XR>
      </Canvas>
      <XRButton mode="AR" />
    </s.canvasContainer>
  );
};

export default AR;
