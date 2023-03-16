import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import PhotoControlButtons from "./PhotoControlButtons";
import { Image } from "@react-three/drei";
import styled from "styled-components";
import { MarioFloorLamp } from "./3D_models/MarioFloorLamp";
import s from "./AR.styles";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Content = styled.div``;

export function PhotoFurniturePlacer() {
  const [imageName, setImageName] = useState<String>("niceLivingRoom.jpg");

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(3.5);
  const [angle, setAngle] = useState(0);

  // const IMG_SRC = room;

  // const ref = useRef();
  // const tex = useLoader(THREE.TextureLoader, IMG_SRC);
  // const img = useLoader(THREE.ImageLoader, IMG_SRC);
  // const raycaster = new THREE.Raycaster();

  // let mouse = useRef<THREE.Vec2 | null>(null);

  // useEffect(() => {
  //   const update = (e: { clientX: number; clientY: number }) => {
  //     mouse.current = new THREE.Vector2(
  //       (e.clientX / window.innerWidth) * 2 - 1,
  //       -(e.clientY / window.innerHeight) * 2 + 1
  //     );
  //     console.log(e.clientX);
  //     console.log(e.clientY);
  //   };
  //   window.addEventListener("pointermove", update);
  //   return () => {
  //     window.removeEventListener("pointermove", update);
  //   };
  // }, []);

  return (
    <Content
      style={{
        backgroundImage: `url(${`/assets/images/roomBackground.jpg`})`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <s.canvasContainer>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MarioFloorLamp position={[x, y, z]} angle={angle} />
          <PhotoControlButtons
            setImageName={setImageName}
            setX={setX}
            setY={setY}
            setZ={setZ}
            setAngle={setAngle}
            x={x}
            y={y}
            z={z}
            angle={angle}
          />
        </Canvas>
      </s.canvasContainer>
    </Content>
  );
}
