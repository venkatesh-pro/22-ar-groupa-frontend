export const TyrChairData = {
  name: "Tyr Chair",
  URL: "assets/Chairs/tyr_chair/scene-transformed.glb",
  backgroundURL: "assets/background_images/chair_lamp_4.jpeg",
  groups: [
    {
      position: [0, -1.5, -5],
      rotation: [Math.PI / 2, 0, 0.5],
      scale: 1.4
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "defaultMaterial",
          material: "DefaultMaterial",
        }
      ],
    },
  ],
};