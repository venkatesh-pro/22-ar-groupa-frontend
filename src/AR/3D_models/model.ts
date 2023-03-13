export interface model {
  URL: string;
  outerGroup: group;
  innerGroup: group;
  meshArray: mesh[]
}

interface group {
  position: number[] | undefined;
  rotation: number[] | undefined;
}

interface mesh {
  geometry: string
  material: string
}
