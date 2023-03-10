import { Canvas } from "@react-three/fiber";
import { ARButton, XR, useHitTest } from "@react-three/xr";
import Box from "./Box";
import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import s from "./AR.styles";
import React from "react";
// import { useRef } from "react";
// import { Matrix4, Mesh } from "three";

const TestBox = React.forwardRef(
  (props: JSX.IntrinsicElements["mesh"], ref) => {
    const boxRef = React.useRef<THREE.Mesh>(null);
    useHitTest((hitMatrix: THREE.Matrix4, hit: XRHitTestResult) => {
      if (boxRef.current) {
        hitMatrix.decompose(
          boxRef.current.position,
          boxRef.current.quaternion,
          boxRef.current.scale
        );
      }
      // const Transform = new XRRigidTransform()
      // hit.createAnchor(Transform).then((anchor) => {
      //   console.log(anchor)
      // }, (error) => {
      //   console.error(`Could not create anchor: ${error}`);
      // }
    });

    return <MarioFloorLamp red={boxRef} {...props} position={[0, 0, -2]} />;
  }
);

export function AugmentedReality() {
  return (
    <s.canvasContainer>
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas camera={{ position: [0, 0, 2] }}>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <TestBox />
        </XR>
      </Canvas>
    </s.canvasContainer>
  );
}
