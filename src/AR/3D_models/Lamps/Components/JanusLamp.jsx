/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Ilya (https://sketchfab.com/Mavericks.magic)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/a-floor-lamp-58823caf1d9f4235a0872ae3e886fd20
Title: a Floor Lamp
*/

import { useGLTF } from "@react-three/drei";

export function JanusLamp(props) {
  const { nodes, materials } = useGLTF(
    "assets/Lamps/janus_lamp/scene-transformed.glb"
  );
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -3, -5]}
      rotation={[Math.PI, Math.PI / 0.6, Math.PI]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh 
          geometry={nodes.Object_2.geometry} 
          material={materials.Latun} />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["black_rezina.002"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["mirror.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");