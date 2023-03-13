import { Canvas } from "@react-three/fiber";
import {
  ARButton,
  XR,
  useHitTest,
  XREvent,
  XRManagerEvent,
} from "@react-three/xr";
import ControlButtons from "./ControlButtons";

import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import s from "./AR.styles";
import React, { useState } from "react";
export function AugmentedReality() {
  const [showControls, setShowControls] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(3.5);
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
        <XR
          onSessionStart={(event: XREvent<XRManagerEvent>) => {
            setShowControls(true);
            setX(0);
            setY(0.7);
            setZ(-1.2);
          }}
          onSessionEnd={(event: XREvent<XRManagerEvent>) => {
            setShowControls(false);
            setX(0);
            setY(0);
            setZ(3.5);
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Item />
          <ControlButtons
            setX={setX}
            setY={setY}
            setZ={setZ}
            setAngle={setAngle}
            x={x}
            y={y}
            z={z}
            angle={angle}
            showControls={showControls}
          />
        </XR>
      </Canvas>
    </s.canvasContainer>
  );
}
