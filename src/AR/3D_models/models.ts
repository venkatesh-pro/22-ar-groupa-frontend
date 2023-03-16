import { model } from "./model";

//Chairs
import { SomaChairData } from "./Chairs/Data/SomaChairData";
import { HaloChairData } from "./Chairs/Data/HaloChairData";

//Lamps
import { MarioLampData } from "./Lamps/Data/MarioLampData";

// //Misc

// //Tables
import { StyxTableData } from "./Tables/Data/StyxTableData";
import { ObeliskTableData } from "./Tables/Data/ObeliskTableData";


export const models: model[] = [
  SomaChairData,
  HaloChairData,
  MarioLampData,
  StyxTableData,
  ObeliskTableData,
];
