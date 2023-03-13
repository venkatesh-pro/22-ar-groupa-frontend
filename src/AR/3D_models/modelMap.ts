import { model } from "./model";

export const ModelMap: model[] = [
  {
    URL: "assets/MarioFloorLamp/scene-transformed.glb",
    outerGroup: {
      position: undefined,
      rotation: [-Math.PI / 2, 0, 0],
    },
    innerGroup: {
      position: undefined,
      rotation: [Math.PI / 2, 0, 0],
    },
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
  {
    URL: "assets/MilleniumFalcon/scene-transformed.glb",
    outerGroup: {
      position: [-0.96, -59.08, -28.65],
      rotation: [-3.14, -0.03, -0.02],
    },
    innerGroup: {
      position: undefined,
      rotation: [-Math.PI, 0, 0],
    },
    meshArray: [
      {
        geometry: "Stereo_textured_mesh_Material0_0",
        material: "Material0",
      },
      {
        geometry: "Stereo_textured_mesh_Material0_0_1",
        material: "Material0",
      },
      {
        geometry: "Stereo_textured_mesh_Material0_0_2",
        material: "Material0",
      },
      {
        geometry: "Stereo_textured_mesh_Material0_0_3",
        material: "Material0",
      },
      {
        geometry: "Stereo_textured_mesh_Material0_0_4",
        material: "Material0",
      }
    ],
  },
];
