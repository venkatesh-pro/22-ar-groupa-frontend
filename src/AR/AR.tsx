import { Canvas } from "@react-three/fiber";
import { Interactive, XR, XRButton } from "@react-three/xr";
import { useState } from "react";
import { A11y, A11yAnnouncer } from "@react-three/a11y";
import Cube from "./Box";
import RightBox from "./RotateRightButton";
import * as THREE from "three";
import { Flex, Box } from "@react-three/flex";
const AR = () => {
  const [rotateClick, setRotateClick] = useState(false);

  const handleSelect = () => {
    setRotateClick(!rotateClick);
  };

  return (
    <div>
      <XRButton mode="AR" />
      <Canvas>
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Interactive onSelect={handleSelect}>
            <Cube
              position={new THREE.Vector3(0, 0, -2)}
              rotateClick={rotateClick}
              setRotateClick={setRotateClick}
            />
          </Interactive>
        </XR>
      </Canvas>
    </div>
  );
};

export default AR;
