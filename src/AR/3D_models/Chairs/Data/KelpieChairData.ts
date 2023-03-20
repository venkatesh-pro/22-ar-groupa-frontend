export const KelpieChairData = {
  name: "Kelpie Chair",
  URL: "assets/Chairs/kelpie_chair/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -2],
      rotation: [Math.PI / 0.9, Math.PI / 1.4, Math.PI],
    },
    {
      rotation: [-Math.PI / 2, 0, 0.95],
      scale: 0.02,
    },
    {
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      position: [0, 0.14, 0],
      meshArray: [
        {
          geometry: "Madeira_(2)_Madeira_0",
          material: "Madeira",
        },
      ],
    },
    {
      position: [0, 1.5, -0.6],
      meshArray: [
        {
          geometry: "Almofada_Couro_0",
          material: "Couro",
        },
      ],
    },
  ],
};
