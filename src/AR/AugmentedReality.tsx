
import { Canvas } from "@react-three/fiber";
import { ARButton, XR} from "@react-three/xr";
import Box from "./Box";
import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import s from "./AR.styles";
// import { useRef } from "react";
// import { Matrix4, Mesh } from "three";

// const HitTestExample = () => {
//   const hitpoint = useRef();
//   useHitTest((hitMatrix: Matrix4, hit: XRHitTestResult) => {
    
//     hitMatrix.decompose(
//       hitpoint.current.position,
//       hitpoint.current.quaternion,
//       hitpoint.current.scale
//     );
//   });

//   return <Box ref={hitpoint}/>;
// };

export function AugmentedReality() {
  return (
    <s.canvasContainer>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <XR>
          <ambientLight />
          <pointLight position={[1, 1, 1]} />
          <MarioFloorLamp position={[0, 0, -2]} />
          <Box position={[3, 0, -10]} />
          {/* <HitTestExample/> */}
        </XR>
      </Canvas>
      <ARButton/>
      {/* <ARButton sessionInit = {{
      domOverlay: typeof document !== "undefined" ? { root: document.body } : void 0,
      optionalFeatures: ["hit-test", "dom-overlay", "dom-overlay-for-handheld-ar"]
    }}/> */}
      {/* <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} /> */}
    </s.canvasContainer>
  );
}
