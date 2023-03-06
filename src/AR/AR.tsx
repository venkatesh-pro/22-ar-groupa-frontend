import { Canvas } from "@react-three/fiber";
import { XR, XRButton } from "@react-three/xr";
import Box from "./Box";

const AR = () => {
  return (
    <div>
      <XRButton mode="AR" />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[1.2, -3, 0]} />
        </XR>
      </Canvas>
    </div>
  );
};

export default AR;
