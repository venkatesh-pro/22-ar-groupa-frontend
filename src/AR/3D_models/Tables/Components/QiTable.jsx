/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: charles.cla (https://sketchfab.com/charles.cla)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/table-ronde-4dbfebfdb6b14f7d96a3af0edf0806f9
Title: Table ronde
*/

import { useGLTF } from "@react-three/drei";

export function QiTable(props) {
  const { nodes, materials } = useGLTF(
    "assets/Tables/qi_table/scene-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["Cylinder005_Material_#7_0"].geometry}
        material={materials.Material_7}
        position={[-9.56, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
