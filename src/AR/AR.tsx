import { Canvas } from "@react-three/fiber";
import { ARButton, Interactive, useHitTest, XR } from "@react-three/xr";
import { useState } from "react";
import Box from "./Box";
import * as THREE from "three";
import React from "react";

const AR = () => {
  const [rotateClick, setRotateClick] = useState(false);
  const [x, setx] = useState(0);

  const handleSelect = () => {
    setRotateClick(!rotateClick);
  };

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

      return (
        <Box
          ref={boxRef}
          {...props}
          position={new THREE.Vector3(0, 0, -2)}
          rotateClick={rotateClick}
          setRotateClick={setRotateClick}
        />
      );
    }
  );

  return (
    <div>
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Interactive onSelect={handleSelect}>
            <TestBox />
          </Interactive>
        </XR>
      </Canvas>
    </div>
  );
};

export default AR;
