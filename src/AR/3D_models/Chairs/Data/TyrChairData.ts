export const TyrChairData = {
  name: "Tyr Chair",
  URL: "assets/Chairs/tyr_chair/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -2],
      rotation: [Math.PI / 1.6, 0, 0.5],
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