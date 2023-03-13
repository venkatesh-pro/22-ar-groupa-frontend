import { Interactive } from "@react-three/xr";
import { Dispatch, SetStateAction } from "react";
import { Vector3 } from "three";
import BigBox from "./BigBox";
import Box from "./Box";

interface controlSettings {
  setX: Dispatch<SetStateAction<number>>;
  setY: Dispatch<SetStateAction<number>>;
  setZ: Dispatch<SetStateAction<number>>;
  setAngle: Dispatch<SetStateAction<number>>;
  x: number;
  y: number;
  z: number;
  angle: number;
  showControls: boolean;
}

const ControlButtons = (props: controlSettings) => {
  return props.showControls ? (
    <>
      <Box
        position={new Vector3(-0.7, -2.99, -2)}
        colour={"orange"}
        rotation={[0, 0, 0]}
      />
      <BigBox
        position={new Vector3(-0.7, -3, -2)}
        colour={"blue"}
        rotation={[0, Math.PI / 4, 0]}
      />
      <Interactive
        onSelect={() => {
          props.setX(props.x + 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.4, -3, -2)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setX(props.x - 0.1);
        }}
      >
        <Box
          position={new Vector3(-1, -3, -2)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setZ(props.z + 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.7, -3, -1.7)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setZ(props.z - 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.7, -3, -2.3)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>

      <Interactive
        onSelect={() => {
          props.setAngle(props.angle + 0.1);
        }}
      >
        <Box
          position={new Vector3(1, -2.989, -2)}
          colour={"green"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setAngle(props.angle - 0.1);
        }}
      >
        <Box
          position={new Vector3(0.4, -2.989, -2)}
          colour={"green"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setY(props.y - 0.1);
        }}
      >
        <Box
          position={new Vector3(0.7, -3, -1.7)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>
      <Interactive
        onSelect={() => {
          props.setY(props.y + 0.1);
        }}
      >
        <Box
          position={new Vector3(0.7, -3, -2.3)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </Interactive>

      <Box
        position={new Vector3(0.7, -2.99, -2)}
        colour={"orange"}
        rotation={[0, 0, 0]}
      />
      <BigBox
        position={new Vector3(0.7, -3, -2)}
        colour={"blue"}
        rotation={[0, Math.PI / 4, 0]}
      />
    </>
  ) : null;
};
export default ControlButtons;
