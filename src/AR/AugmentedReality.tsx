import { Canvas } from "@react-three/fiber";
import { ARButton, XR, useHitTest } from "@react-three/xr";
import ControlButtons from "./ControlButtons";
import { Scene } from "./3D_models/Scene";

import s from "./AR.styles";
import React, { useState } from "react";
import { models } from "./3D_models/models";

import { useLocation } from "react-router-dom";

export const AugmentedReality = () => {
  let { state } = useLocation();
  console.log(state);
  const getElementByIdName = (name: String) => {
    var modelUsed = models[0];
    for (let index = 0; index < models.length; index++) {
      if (name === models[index].URL) {
        modelUsed = models[index];
      }
    }
    return modelUsed;
  };

  const model = getElementByIdName(state);

  let modelX: number = model.groups[0].position?.at(0) ?? 0;
  let modelY: number = model.groups[0].position?.at(1) ?? 0;
  let modelZ: number = model.groups[0].position?.at(2) ?? 0;
  let rotationY: number = model.groups[0].rotation?.at(1) ?? Math.PI;

  const [showControls, setShowControls] = useState(false);
  const [x, setX] = useState(modelX);
  const [y, setY] = useState(modelY);
  const [z, setZ] = useState(modelZ);
  const [angle, setAngle] = useState(rotationY);

  const Item3D = React.forwardRef(() => {
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
    return (
      <Scene threeD={model} ref={boxRef} position={[x, y, z]} angle={angle} />
    );
  });

  return (
    <s.canvasContainer>
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas>
        <XR
          onSessionStart={() => {
            setShowControls(true);
            setX(0);
            setY(0.7);
            setZ(-1.2);
          }}
          onSessionEnd={() => {
            setShowControls(false);
            setX(0);
            setY(0);
            setZ(3.5);
          }}
        >
          <pointLight position={[10, 10, 10]} />
          <Item3D />
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
};
