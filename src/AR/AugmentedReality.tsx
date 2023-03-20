import { Canvas } from "@react-three/fiber";
import {
  ARButton,
  XR,
  useHitTest,
  XREvent,
  XRManagerEvent,
} from "@react-three/xr";
import ControlButtons from "./ControlButtons";
import { Scene } from "./3D_models/Scene";
import s from "./AR.styles";
import React, { useState } from "react";
import { model } from "./3D_models/model";
import { MinervaChair } from "./3D_models/Chairs/Components/MinervaChair";
import { KelpieChair } from "./3D_models/Chairs/Components/KelpieChair";
import { SomaChair } from "./3D_models/Chairs/Components/SomaChair"
import { TyrChair } from "./3D_models/Chairs/Components/TyrChair";
import { VitraChair } from "./3D_models/Chairs/Components/VitraChair";
import { CirusLamp } from "./3D_models/Lamps/Components/CirusLamp";
import { DurbanLamp } from "./3D_models/Lamps/Components/DurbanLamp";
import { JanusLamp } from "./3D_models/Lamps/Components/JanusLamp";
import { VelesLamp } from "./3D_models/Lamps/Components/VelesLamp";

interface Props {
  threeD: model;
}

export const AugmentedReality: React.FC<Props> = ({ threeD }) => {

  let modelX: number = threeD.groups[0].position?.at(0) ?? 0;
  let modelY: number = threeD.groups[0].position?.at(1) ?? 0;
  let modelZ: number = threeD.groups[0].position?.at(2) ?? 0;
  let rotationY: number = threeD.groups[0].rotation?.at(1) ?? Math.PI;
  

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
      <Scene threeD={threeD} ref={boxRef} position={[x, y, z]} angle={angle} />
    );
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
          <Item3D />
          {/* <DurbanLamp/> */}
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
