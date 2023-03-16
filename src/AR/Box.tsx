import * as THREE from "three";
import React, { useRef } from "react";
import { Vector3 } from "three";
import { Euler } from "@react-three/fiber";
interface BoxSettings {
  colour: string;
  position: Vector3;
  rotation: Euler;
}

const Box = React.forwardRef((props: BoxSettings) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh
      {...props}
      position={props.position}
      rotation={props.rotation}
      ref={ref}
    >
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={props.colour} />
    </mesh>
  );
});

export default Box;
