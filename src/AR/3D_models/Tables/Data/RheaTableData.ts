export const RheaTableData = {
  name: "Rhea Table",
  URL: "assets/Tables/rhea_table/scene-transformed.glb",
  backgroundURL: "assets/background_images/chair_lamp_6.jpeg",
  groups: [
    {
      position: [0, -5, -10],
      rotation: [Math.PI, Math.PI, Math.PI],
      scale: 2,
      meshArray: [
        {
          geometry: "pCylinder6_blinn1_0",
          material: "blinn1",
        },
      ],
    },
  ],
};
