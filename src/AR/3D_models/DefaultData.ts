export const NameTypeData = {
  name: "Name Type",
  URL: "assets/Type/name_type/scene-transformed.glb",
  groups: [
    {
      position: [0, 0, -10],
      rotation: [Math.PI, Math.PI, Math.PI],
      scale: 1
    },
    {
      position: [0, 0, 0],
      rotation: [Math.PI / 0.9, Math.PI, Math.PI],
      scale: 1,
      meshArray: [
        {
          geometry: "geo",
          material: "mat",
        },
        {
          geometry: "geo",
          material: "mat",
        },
      ],
    },
  ],
};
