import ReactThreeTestRenderer from "@react-three/test-renderer";
import { SetStateAction } from "react";
import { Vector3 } from "three";
import ControlButtons from "./ControlButtons";

test("testing", async () => {
  const renderer = await ReactThreeTestRenderer.create(
    <ControlButtons
      setX={function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
      }}
      setY={function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
      }}
      setZ={function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
      }}
      setAngle={function (value: SetStateAction<number>): void {
        throw new Error("Function not implemented.");
      }}
      x={0}
      y={0}
      z={0}
      angle={0}
      showControls={false}
    />
  );

  expect(renderer.scene.instance).toBeDefined();
});
