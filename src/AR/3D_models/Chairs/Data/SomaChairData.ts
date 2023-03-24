export const SomaChairData = {
    name: "Soma Chair",
    URL: "assets/Chairs/soma_chair/scene-transformed.glb",
    backgroundURL: "assets/background_images/chair_lamp_3.jpeg",
    groups: [
      {
        position: [-1, -1, -5],
        rotation: [Math.PI, Math.PI / 0.85, Math.PI],
        scale: 5
      },
      {
        rotation: [-Math.PI / 2, 0, 0],
        scale: 0.75,
      },
      {
        rotation: [Math.PI / 2, 0, 0],
        scale: 0.01,
        meshArray: [
          {
            geometry: "Cube_rest_0",
            material: "rest",
            rotation: [-Math.PI / 2, 0, 0],
            scale: 15.5,
          },
          {
            geometry: "Cube001_rest_0",
            material: "rest",
            rotation: [-Math.PI / 2, 0, 0],
            scale: 15.5,
          },
          {
            geometry: "Cube002_rest_0",
            material: "rest",
            rotation: [-Math.PI / 2, 0, 0],
            scale: 15.5,
          },
          {
            geometry: "Cube003_rest_0",
            material: "rest",
            rotation: [-Math.PI / 2, 0, 0],
            scale: 15.5,
          },
        ],
      },
      {
        rotation: [-Math.PI / 2, 0, 0],
        scale: 15.5,
        meshArray: [
          {
            geometry: "Cube004_leder_oben_0",
            material: "leder_oben",
          },
          {
            geometry: "Cube004_leder_oben_0_1",
            material: "leder_oben",
          }
        ],
      },
    ],
  };