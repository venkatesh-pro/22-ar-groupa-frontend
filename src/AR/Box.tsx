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
      scale={hovered ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? "hotpink" : "orange"} />
    </mesh>
  );
});

export default Box;
