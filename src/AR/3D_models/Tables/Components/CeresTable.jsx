/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Elasta Kristya (https://sketchfab.com/luca3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/industrial-table-5f94fb035fa74f43abda3ada8f0a719e
Title: Industrial Table
*/

import { useGLTF } from '@react-three/drei'

export function CeresTable(props) {
  const { nodes, materials } = useGLTF('assets/Tables/ceres_table/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Table_wood_1} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Old_Steel} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
