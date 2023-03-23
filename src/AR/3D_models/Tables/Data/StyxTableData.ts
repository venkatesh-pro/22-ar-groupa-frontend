export const StyxTableData = {
  name: "Styx Table",
  URL: "assets/Tables/styx_table/scene-transformed.glb",
  backgroundURL: "",
  groups: [
    {
      position: [0, -1.5, -5],
      rotation: [Math.PI, Math.PI /0.97, 0],
      scale: 3.5
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
