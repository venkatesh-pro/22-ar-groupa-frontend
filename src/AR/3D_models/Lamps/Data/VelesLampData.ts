export const VelesLampData = {
  name: "Veles Lamp",
  URL: "assets/Lamps/veles_lamp/scene-transformed.glb",
  groups: [
    {
      position: [-4.5, -5, -10],
      rotation: [Math.PI, Math.PI, Math.PI],
      scale: 0.0075
    },
    {
      rotation: [-Math.PI, 0, 0],
      meshArray: [
        {
          geometry: "Object_2",
          material: "M_10_Lamp_Wood",
        },
        {
          geometry: "Object_3",
          material: "M_12_Plastic",
        }, {
          geometry: "Object_4",
          material: "M_12_Plastic",
        }, {
          geometry: "Object_5",
          material: "M_7_Metall",
        }, {
          geometry: "Object_6",
          material: "M_7_Metall",
        }, {
          geometry: "Object_7",
          material: "M_7_Metall",
        }, {
          geometry: "Object_8",
          material: "M_8_Lamp_Glass",
        }, {
          geometry: "Object_9",
          material: "M_8_Lamp_Glass",
        }, {
          geometry: "Object_10",
          material: "M_9_Lamp_Fabric5",
        },
      ],
    },
  ],
};
