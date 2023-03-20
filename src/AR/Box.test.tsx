import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Vector3 } from "three";
import Box from "./Box";

test("testing", async () => {
  const renderer = await ReactThreeTestRenderer.create(
    <Box
      position={new Vector3(1, 1, 1)}
      colour={"orange"}
      rotation={[0, 0, 0]}
    />
  );

  expect(renderer.scene.instance).toBeDefined();
});
