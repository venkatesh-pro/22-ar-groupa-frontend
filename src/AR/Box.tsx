import * as THREE from "three";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

interface BoxSettings {
  colour: string;
  position: Vector3;
}

const Box = React.forwardRef((props: BoxSettings) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} position={props.position} ref={ref}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={props.colour} />
    </mesh>
  );
});

export default Box;
