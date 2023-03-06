import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'; 

function aModel() {
    // const gltf = useLoader(GLTFLoader, "Users/alk/ARproject/22-AR-groupA-frontend/public/assets/mario_floor_lamp/scene.gltf")
    // const usingGlft = useGLTF('3d/actual3d.glb',true)
    return (
      <Suspense fallback={null}>
        {/* <primitive object={gltf.scene} /> */}
      </Suspense>
    )
  }

export default aModel