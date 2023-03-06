import { Canvas } from "@react-three/fiber";
import { XR, XRButton } from "@react-three/xr";
import Box from "./Box";
// import Image from "./Image"
import { Model } from "./Scene";

const AR = () => {
  return (
    <div>
      <XRButton mode="AR" />
      <Canvas camera={{position: [0, 0, 2]}}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[1.2, -3, 0]} /> */}
          <Model position={[0, 0, 0]}/>
        </XR>
      </Canvas>
    </div>
  );
};

export default AR;
