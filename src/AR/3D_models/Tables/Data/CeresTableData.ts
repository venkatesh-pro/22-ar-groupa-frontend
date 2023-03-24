export const CeresTableData = {
  name: "Ceres Table",
  URL: "assets/Tables/ceres_table/scene-transformed.glb",
  backgroundURL: "assets/background_images/table_1.jpeg",
  groups: [
    {
      position: [0, -4.5, -10],
      rotation: [Math.PI, Math.PI / 0.97, Math.PI],
      scale: 6,
      meshArray: [
        {
          geometry: "Object_4",
          material: "Table_wood_1",
        },
        {
          geometry: "Object_5",
          material: "Old_Steel",
        },
      ],
    },
  ],
};
