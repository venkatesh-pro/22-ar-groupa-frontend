import { Canvas } from "@react-three/fiber";
import { ARButton, XR, useHitTest } from "@react-three/xr";
import ControlButtons from "./ControlButtons";
import { Scene } from "./3D_models/Scene";
import s from "./AR.styles";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { models } from "./3D_models/models";
import { OrbitControls } from "@react-three/drei";

export const AugmentedReality = () => {
  let { state } = useLocation();
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
  let backgroundURL: string = model.backgroundURL;

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
    <div>
      <s.canvasContainer style={{}}>
        <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
        <Canvas
          style={{
            backgroundImage: `url(${backgroundURL})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "76vh",
            width: "90vw",
            margin: "auto",
            marginTop: "1vh",
          }}
        >
          <XR
            onSessionStart={() => {
              setShowControls(true);
              setX(modelX);
              setY(modelY - 2);
              setZ(modelZ - 5);
            }}
            onSessionEnd={() => {
              setShowControls(false);
              setX(modelX);
              setY(modelY - 2);
              setZ(modelZ - 5);
            }}
          >
            <pointLight position={[0, 20, 0]} decay={0} />
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
            <OrbitControls maxZoom={5} />
          </XR>
        </Canvas>
      </s.canvasContainer>
    </div>
  );
};
