export const HeraTableData = {
  name: "Hera Table",
  URL: "assets/Tables/hera_table/scene-transformed.glb",
  groups: [
    {
      position: [0, -5, -10],
      rotation: [Math.PI, Math.PI, Math.PI],
      scale: 8
    },
    {
      position: [0, 0.28, 0],
      rotation: [Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "Object_4",
          material: "Gold.001",
        },
        {
          geometry: "Object_5",
          material: "Material.006",
        },
      ],
    },
  ],
};
