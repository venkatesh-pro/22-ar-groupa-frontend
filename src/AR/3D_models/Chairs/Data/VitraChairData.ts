export const VitraChairData = {
  name: "Vitra Chair",
  URL: "assets/Chairs/vitra_chair/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -2],
      rotation: [Math.PI / 0.85, Math.PI, Math.PI],
      scale: 1
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      scale: 0.05,
      meshArray: [
        {
          geometry: "Object_2",
          material: "01_-_Default",
        },
        {
          geometry: "Object_3",
          material: "01_-_Default",
        },
        {
          geometry: "Object_4",
          material: "01_-_Default",
        },
        {
          geometry: "Object_5",
          material: "01_-_Default",
        },
      ],
    },
  ],
};
