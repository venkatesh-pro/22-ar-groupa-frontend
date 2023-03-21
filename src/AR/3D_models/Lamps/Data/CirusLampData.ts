export const CirusLampData = {
  name: "Cirus Lamp",
  URL: "assets/Lamps/cirus_lamp/scene-transformed.glb",
  groups: [
    {
      position: [0, 10, -15],
      rotation: [Math.PI / 0.9, Math.PI, Math.PI],
      scale: 0.1
    },
    {
      position: [0, -196.27, 0],
      rotation: [Math.PI / 2, 0, -Math.PI],
    },
    {
      rotation: [-Math.PI, 0, 0],
    },
    {
      rotation: [Math.PI / 2, 0, 0],
      meshArray: [
        {
          geometry: "pSphere4_lambert1_0",
          material: "lambert1",
        },
        {
          geometry: "pSphere4_lambert5_0",
          material: "lambert",
        },
      ],
    },
  ],
};
