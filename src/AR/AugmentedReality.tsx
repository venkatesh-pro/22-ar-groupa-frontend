import { Canvas } from "@react-three/fiber";
import { ARButton, XR, useHitTest, Interactive, useXR } from "@react-three/xr";
import Box from "./Box";

import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import s from "./AR.styles";
import React, { useState } from "react";
import { Vector3 } from "three";
export function AugmentedReality() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0.8);
  const [z, setZ] = useState(-2);
  const [angle, setAngle] = useState(0);
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

    return <MarioFloorLamp ref={boxRef} position={[x, y, z]} angle={angle} />;
  });

  return (
    <s.canvasContainer>
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Interactive
            onSelect={() => {
              setX(x + 0.1);
            }}
          >
            <Box position={new Vector3(-0.4, -3, -2)} colour={"orange"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setX(x - 0.1);
            }}
          >
            <Box position={new Vector3(-1, -3, -2)} colour={"orange"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setZ(z + 0.1);
            }}
          >
            <Box position={new Vector3(-0.7, -3, -1.7)} colour={"orange"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setZ(z - 0.1);
            }}
          >
            <Box position={new Vector3(-0.7, -3, -2.3)} colour={"orange"} />
          </Interactive>

          <Box position={new Vector3(-0.7, -3, -2)} colour={"yellow"} />
          <Item />

          <Interactive
            onSelect={() => {
              setAngle(angle + 0.1);
            }}
          >
            <Box position={new Vector3(1, -3, -2)} colour={"green"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setAngle(angle - 0.1);
            }}
          >
            <Box position={new Vector3(0.4, -3, -2)} colour={"green"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setY(y - 0.1);
            }}
          >
            <Box position={new Vector3(0.7, -3, -1.7)} colour={"orange"} />
          </Interactive>
          <Interactive
            onSelect={() => {
              setY(y + 0.1);
            }}
          >
            <Box position={new Vector3(0.7, -3, -2.3)} colour={"orange"} />
          </Interactive>

          <Box position={new Vector3(0.7, -3, -2)} colour={"yellow"} />
        </XR>
      </Canvas>
    </s.canvasContainer>
  );
}
