import { Canvas } from "@react-three/fiber";
import { ARButton, XR, useHitTest, Interactive, useXR } from "@react-three/xr";
import Box from "./Box";
import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import { MilleniumFalcon } from "./3D_models/MilleniumFalcon";
import s from "./AR.styles";
import React, { useEffect, useRef, useState } from "react";
export function AugmentedReality() {
  const [rotate, setRotate] = useState(0);
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);
  const [z, setZ] = useState(-4);
  const Item = React.forwardRef((props: JSX.IntrinsicElements["mesh"], ref) => {
    const boxRef = React.useRef<THREE.Mesh>(null!);
    useHitTest((hitMatrix) => {
      if (boxRef.current) {
        hitMatrix.decompose(
          boxRef.current.position,
          boxRef.current.quaternion,
          boxRef.current.scale
        );
      }
    });

    return <MarioFloorLamp ref={boxRef} position={[x, y, z]} rotate={rotate} />;
  });

  return (
    <s.canvasContainer>
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Interactive
            onSelect={() => (rotate === 0 ? setRotate(0.05) : setRotate(0))}
          >
            <Item />
          </Interactive>
          <Interactive
            onSelect={() => {
              setX(x + 0.1);
            }}
          >
            <Box position={[0.3, -3, -2]} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setX(x - 0.1);
            }}
          >
            <Box position={[-0.3, -3, -2]} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setZ(z + 0.1);
            }}
          >
            <Box position={[0, -3, -1.7]} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setZ(z - 0.1);
            }}
          >
            <Box position={[0, -3, -2.3]} />
          </Interactive>
          <Box position={[0, -3, -2]} />
        </XR>
      </Canvas>
    </s.canvasContainer>
  );
}
