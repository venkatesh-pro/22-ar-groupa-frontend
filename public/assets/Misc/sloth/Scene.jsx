/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: SDPM Esare (https://sketchfab.com/sdpm)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sloth-783d7af55a334608996b127461c5f825
Title: Sloth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[-0.01, -0.26, 0.2]} scale={0.07} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')