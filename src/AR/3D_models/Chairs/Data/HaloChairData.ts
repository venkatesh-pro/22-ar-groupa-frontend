export const HaloChairData = {
  name: "Halo Chair",
  URL: "assets/Chairs/halo_chair/scene-transformed.glb",
  groups: [
    {
      position: [0, -1, -20],
      rotation: [Math.PI / 0.9, Math.PI, Math.PI],
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      scale: 1.07,
      meshArray: [
        {
          geometry: "Chair_Back_0",
          material: "Chair_Back",
          position: [0, 0.89, 2.25],
          rotation: [1.44, 0, 0],
          scale: 0.19
        },
        {
          geometry: "Chair_Sit_0",
          material: "Chair_Back",
          position: [0, 0.43, 1.18],
          rotation: [-0.08, 0, 0],
          scale: 0.17,
        },
        {
          geometry: "Chair_Legs_0",
          material: "Chair_Legs",
          position: [0, 0, 0.77],
          rotation: [-0.06, -0.08, 0.01],
          scale: 0.04,
        },
      ],
    },
  ],
};
