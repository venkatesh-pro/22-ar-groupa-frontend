import * as THREE from "three";
import React, { useRef } from "react";
import { Vector3 } from "three";
import { Euler } from "@react-three/fiber";

interface BoxSettings {
  colour: string;
  position: Vector3;
  rotation: Euler;
}

const BigBox = React.forwardRef((props: BoxSettings) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh
      {...props}
      position={props.position}
      ref={ref}
      rotation={props.rotation}
      scale={[0.42, 0.31, 0.42]}
    >
      <boxGeometry />
      <meshStandardMaterial color={props.colour} />
    </mesh>
  );
});

export default BigBox;
