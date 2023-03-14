export interface model {
  name: string;
  URL: string;
  groups: group[]
}

interface group {
  position?: number[] | undefined;
  rotation?: number[] | undefined;
  scale?: number | undefined
  meshArray?: mesh[] | undefined;
}

interface mesh {
  geometry?: string | undefined;
  material?: string | undefined;
  rotation?: number[] | undefined;
  scale?: number | undefined;
}
