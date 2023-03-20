export const DurbanLampData = {
  name: "Durban Lamp",
  URL: "assets/Lamps/durban_lamp/scene-transformed.glb",
  groups: [
    {
      position: [0, -40, -150],
      rotation: [Math.PI / 0.95, Math.PI / 1.2, Math.PI],
      scale: 0.5,
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
