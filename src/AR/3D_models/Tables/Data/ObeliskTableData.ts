export const ObeliskTableData = {
    name: "Obelisk Table",
    URL: "assets/Tables/obelisk_table/scene-transformed.glb",
    groups: [
      { position: [0, 0, 0], rotation: [Math.PI / 0.9, Math.PI, Math.PI] },
      {
        rotation: [-Math.PI / 2, 0, 0],
        scale: 0.04,
        meshArray: [
          {
            geometry: "defaultMaterial",
            material: "Default",
            rotation: [Math.PI / 2, 0, 0]
          },
        ],
      },
    ],
  };