export const ObeliskTableData = {
    name: "Obelisk Table",
    URL: "assets/Tables/obelisk_table/scene-transformed.glb",
    backgroundURL: "assets/background_images/table_2.jpeg",
    groups: [
      { position: [0, -3, -10], 
        rotation: [Math.PI, Math.PI, Math.PI],
        scale: 4
       },
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