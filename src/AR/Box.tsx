import * as THREE from "three";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

interface boxData {
  position: Vector3;
  rotateClick: boolean;
  setRotateClick: Dispatch<SetStateAction<boolean>>;
}

const Box = React.forwardRef((props: boxData, reference) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) =>
    props.rotateClick ? (ref.current.rotation.y += delta) : null
  );

  return (
    <mesh
      {...props}
      position={props.position}
      ref={ref}
      onClick={() => props.setRotateClick(!props.rotateClick)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
});

export default Box;
