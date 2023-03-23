export const JanusLampData = {
  name: "Janus Lamp",
  URL: "assets/Lamps/janus_lamp/scene-transformed.glb",
  backgroundURL: "assets/background_images/chair_lamp_1.jpeg",
  groups: [
    {
      position: [1.7, -3, -10],
      rotation: [Math.PI, Math.PI / 0.6, Math.PI],
      scale: 1.5
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "Object_2",
          material: "Latun",
        },
        {
          geometry: "Object_3",
          material: "Material",
        },
        {
          geometry: "Object_4",
          material: "black_rezina.002",
        },
        {
          geometry: "Object_5",
          material: "mirror.001",
        },
      ],
    },
  ],
};
