import { Dispatch, SetStateAction, useState } from "react";
import { FileLoader, Vector3 } from "three";
import BigBox from "./BigBox";
import Box from "./Box";
import React from "react";
import { moveFile } from "move-file";
import fs from "fs";

interface controlSettings {
  setImageName: Dispatch<SetStateAction<String>>;
  setX: Dispatch<SetStateAction<number>>;
  setY: Dispatch<SetStateAction<number>>;
  setZ: Dispatch<SetStateAction<number>>;
  setAngle: Dispatch<SetStateAction<number>>;
  x: number;
  y: number;
  z: number;
  angle: number;
}

const PhotoControlButtons = (props: controlSettings) => {
  const openFileExplorer = async () => {
    var [fileHandle] = await window.showOpenFilePicker();
    var fileData = fileHandle.getFile();
    var name = (await fileData).name;

    var fs = require("fs");

    var oldPath = name;
    var newPath = `public/assets/images/roomBackground.jpg`;

    fs.rename(oldPath, newPath, function (err: Error) {
      if (err) throw err;
      console.log("Successfully renamed - AKA moved!");
    });
  };

  return (
    <>
      <mesh
        onClick={() => {
          openFileExplorer();
        }}
      >
        <Box
          position={new Vector3(-2, -3, -0.4)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <Box
        position={new Vector3(-0.7, -2.99, -0.4)}
        colour={"orange"}
        rotation={[0, 0, 0]}
      />
      <BigBox
        position={new Vector3(-0.7, -3, -0.4)}
        colour={"blue"}
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        onClick={() => {
          props.setX(props.x + 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.4, -3, -0.4)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setX(props.x - 0.1);
        }}
      >
        <Box
          position={new Vector3(-1, -3, -0.4)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setZ(props.z + 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.7, -3, -0.1)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setZ(props.z - 0.1);
        }}
      >
        <Box
          position={new Vector3(-0.7, -3, -0.7)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setAngle(props.angle + 0.1);
        }}
      >
        <Box
          position={new Vector3(1, -2.989, -0.4)}
          colour={"green"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setAngle(props.angle - 0.1);
        }}
      >
        <Box
          position={new Vector3(0.4, -2.989, -0.4)}
          colour={"green"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setY(props.y - 0.1);
        }}
      >
        <Box
          position={new Vector3(0.7, -3, -0.1)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <mesh
        onClick={() => {
          props.setY(props.y + 0.1);
        }}
      >
        <Box
          position={new Vector3(0.7, -3, -0.7)}
          colour={"orange"}
          rotation={[0, 0, 0]}
        />
      </mesh>

      <Box
        position={new Vector3(0.7, -2.99, -0.4)}
        colour={"orange"}
        rotation={[0, 0, 0]}
      />
      <BigBox
        position={new Vector3(0.7, -3, -0.4)}
        colour={"blue"}
        rotation={[0, Math.PI / 4, 0]}
      />
    </>
  );
};
export default PhotoControlButtons;
