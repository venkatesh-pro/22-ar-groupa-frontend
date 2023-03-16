export const LampData = {
    name: "Lamp",
    URL: "assets/Lamps/lamp/scene-transformed.glb",
    groups: [
      {
        position: [0, 0, -400],
        rotation: [Math.PI, Math.PI, Math.PI],
      },
      {
        position: [0, -196.27, 0],
        rotation: [Math.PI / 2, 0, -Math.PI],
      },
      {
        rotation: [-Math.PI, 0, 0],
      },
      {
        rotation: [Math.PI / 2, 0, 0],
        meshArray: [
          {
            geometry: "pSphere4_lambert1_0",
            material: "lambert1",
          },
          {
            geometry: "pSphere4_lambert5_0",
            material: "lambert5",
          },
        ],
      },
    ],
  };