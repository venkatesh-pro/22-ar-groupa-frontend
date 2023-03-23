export const DurbanLampData = {
  name: "Durban Lamp",
  URL: "assets/Lamps/durban_lamp/scene-transformed.glb",
  backgroundURL: "assets/background_images/chair_lamp_7.jpeg",
  groups: [
    {
      position: [2.5, -4, -10],
      rotation: [Math.PI, Math.PI / 0.9, Math.PI],
      scale: 0.05,
    },
    {
      rotation: [-Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "FLOOR",
          material: "FLOOR",
        },
      ],
    },
    {
      position: [0, -140.06, 168.71],
      rotation: [-Math.PI, 0, 0],
      scale: 0.89,
    },
    {
      position: [0, -0.03, -137.48],
      meshArray: [
        {
          geometry: "COPPER",
          material: "COPPER",
        },
        {
          geometry: "LIGHT_BULB",
          material: "EnvironmentAmbientLight",
        },
        {
          geometry: "STEEL_MATT_GREY",
          material: "STEEL_MATT_GREY",
        },
        {
          geometry: "RUBBER",
          material: "RUBBER",
        },
        {
          geometry: "STEEL",
          material: "STEEL",
        },
        {
          geometry: "STEEL_WHITE",
          material: "STEEL_WHITE",
        },
        {
          geometry: "LAMP_SHADE",
          material: "LAMP_SHADE",
        },
      ],
    },
  ],
};
