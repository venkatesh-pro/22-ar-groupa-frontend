import * as THREE from "three";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Box = React.forwardRef((props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} position={props.position} ref={ref}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
});

export default Box;
