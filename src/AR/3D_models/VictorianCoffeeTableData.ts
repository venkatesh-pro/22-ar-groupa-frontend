export const VictorianCoffeeTableData = {
  name: "VictorianCoffeeTable",
  URL: "assets/victorian_coffee_table/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -2],
      rotation: [Math.PI, Math.PI, Math.PI],
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "defaultMaterial",
          material: "initialShadingGroup",
          rotation: [-Math.PI / 2, 0, 0],
        },
      ],
    },
  ],
};
