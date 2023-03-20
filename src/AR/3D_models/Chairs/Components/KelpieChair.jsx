/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: brucassol (https://sketchfab.com/brucassol)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-327203d10f524ed2aac78e59546821b3
Title: Chair
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function KelpieChair(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "assets/Chairs/kelpie_chair/scene-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 0, 2]}
      rotation={[Math.PI / 0.9, Math.PI / 2, Math.PI]}
    >
      <group
        name="Sketchfab_model"
        rotation={[-Math.PI / 2, 0, 0.95]}
        scale={0.02}
      >
        <group
          name="7cb4ba39acb74acf8dd12c14f6121175fbx"
          rotation={[Math.PI / 2, 0, 0]}
        >
          <group name="Poltrona" position={[0, 0.14, 0]}>
            <group name="Madeira_(2)">
              <mesh
                name="Madeira_(2)_Madeira_0"
                geometry={nodes["Madeira_(2)_Madeira_0"].geometry}
                material={materials.Madeira}
              />
              <group name="Almofada" position={[0, 1.5, -0.6]}>
                <mesh
                  name="Almofada_Couro_0"
                  geometry={nodes.Almofada_Couro_0.geometry}
                  material={materials.Couro}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
