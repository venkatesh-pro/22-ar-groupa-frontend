export const MarioLampData = {
  name: "Mario Lamp",
  URL: "assets/Lamps/mario_lamp/scene-transformed.glb",
  backgroundURL: "assets/background_images/chair_lamp_2.jpeg",
  groups: [
    { position: [0, 0, -5], 
      rotation: [Math.PI, Math.PI, Math.PI],
      scale: 4
    },
      
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
