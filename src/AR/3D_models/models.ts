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
import { KelpieChairData } from "./Chairs/Data/KelpieChairData";
import { TyrChairData } from "./Chairs/Data/TyrChairData";
import { VitraChairData } from "./Chairs/Data/VitraChairData";
import { CirusLampData } from "./Lamps/Data/CirusLampData";
import { DurbanLampData } from "./Lamps/Data/DurbanLampData";


export const models: model[] = [

  DurbanLampData,
  CirusLampData,  
    VitraChairData,
    TyrChairData,
    KelpieChairData,
  SomaChairData,
  HaloChairData,
  MarioLampData,
  StyxTableData,
  ObeliskTableData,
];
