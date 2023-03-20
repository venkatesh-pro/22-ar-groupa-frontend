export const StyxTableData = {
  name: "Styx Table",
  URL: "assets/Tables/styx_table/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -2],
      rotation: [Math.PI / 0.9, Math.PI, 0],
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
