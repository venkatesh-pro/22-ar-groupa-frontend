export const MarioFloorLampData = {
  name: "MarioFloorLamp",
  URL: "assets/mario_floor_lamp/scene-transformed.glb",
  groups: [
    { position: [0, 0, -2], rotation: [Math.PI, Math.PI, Math.PI] },
    {
      rotation: [-Math.PI / 2, 0, 0],
    },
    {
      rotation: [Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "defaultMaterial",
          material: "Mario_Metal",
        },
        {
          geometry: "defaultMaterial_1",
          material: "Brass",
        },
        {
          geometry: "defaultMaterial_2",
          material: "Glow",
        },
        {
          geometry: "defaultMaterial_3",
          material: "Shuho",
        },
        {
          geometry: "defaultMaterial_4",
          material: "Metal_Chrome",
        },
        {
          geometry: "defaultMaterial_5",
          material: "Shadow",
        },
      ],
    },
  ],
};
