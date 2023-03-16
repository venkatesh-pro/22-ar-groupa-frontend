// @ts-nocheck

import { useGLTF } from "@react-three/drei";
import { model } from "./model";

interface Props {
  threeD: model;
  ref;
  angle;
  position;
}

export const Scene: React.FC<Props> = ({ threeD, ref, angle, position }) => {

  console.log(threeD.groups[0].rotation.at(0))
  console.log(threeD.groups[1].meshArray?.at(0))
  const { nodes, materials } = useGLTF(threeD.URL);
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={[
        threeD.groups[0].rotation.at(0),
        Math.PI * angle,
        threeD.groups[0].rotation.at(2),
      ]}
      scale={threeD.groups[0]?.scale}
    >
      {threeD.groups[0]?.meshArray?.map((element) => (
            <mesh
              key={element.geometry}
              geometry={nodes[element.geometry].geometry}
              material={materials[element.material]}
              rotation={element.rotation}
              scale={element.scale}
            />
          ))}
      <group
        position={threeD.groups[1]?.position}
        rotation={threeD.groups[1]?.rotation}
        scale={threeD.groups[1]?.scale}
      >
        {threeD.groups[1]?.meshArray?.map((element) => (
            <mesh
              key={element.geometry}
              geometry={nodes[element.geometry].geometry}
              material={materials[element.material]}
              rotation={element.rotation}
              scale={element.scale}
              position={element.position}
            />
          ))}
        <group
          position={threeD.groups[2]?.position}
          rotation={threeD.groups[2]?.rotation}
          scale={threeD.groups[2]?.scale}
        >
          {threeD.groups[2]?.meshArray?.map((element) => (
            <mesh
              key={element.geometry}
              geometry={nodes[element.geometry].geometry}
              material={materials[element.material]}
              rotation={element.rotation}
              scale={element.scale}
              position={element.position}
            />
          ))}
          <group
            position={threeD.groups[3]?.position}
            rotation={threeD.groups[3]?.rotation}
            scale={threeD.groups[3]?.scale}
          >
            {threeD.groups[3]?.meshArray?.map((element) => (
              <mesh
                key={element.geometry}
                geometry={nodes[element.geometry].geometry}
                material={materials[element.material]}
                rotation={element.rotation}
                scale={element.scale}
                position={element.position}
              />
            ))}
          </group>
        </group>
      </group>
    </group>
  );
};

// useGLTF.preload("/scene-transformed.glb");
