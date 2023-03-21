import { model } from "./model";

//Chairs
import { SomaChairData } from "./Chairs/Data/SomaChairData";
import { HaloChairData } from "./Chairs/Data/HaloChairData";
import { KelpieChairData } from "./Chairs/Data/KelpieChairData";
import { TyrChairData } from "./Chairs/Data/TyrChairData";
import { VitraChairData } from "./Chairs/Data/VitraChairData";
import { MinervaChairData } from "./Chairs/Data/MinervaChairData";

//Lamps
import { MarioLampData } from "./Lamps/Data/MarioLampData";
import { CirusLampData } from "./Lamps/Data/CirusLampData";
import { DurbanLampData } from "./Lamps/Data/DurbanLampData";
import { JanusLampData } from "./Lamps/Data/JanusLampData";
import { VelesLampData } from "./Lamps/Data/VelesLampData";

// //Misc

// //Tables
import { StyxTableData } from "./Tables/Data/StyxTableData";
import { ObeliskTableData } from "./Tables/Data/ObeliskTableData";
import { CeresTableData } from "./Tables/Data/CeresTableData";
import { HeraTableData } from "./Tables/Data/HeraTableData";
import { QiTableData } from "./Tables/Data/QiTableData";
import { RheaTableData } from "./Tables/Data/RheaTableData";
import { BabyYodaData } from "./Misc/Data/BabyYodaData";

export const models: model[] = [

  BabyYodaData,
  
  HaloChairData,
  KelpieChairData,
  MinervaChairData,
  SomaChairData,
  TyrChairData,
  VitraChairData,
  
  CirusLampData,
  DurbanLampData,
  MarioLampData,
  JanusLampData,
  VelesLampData,
  
  StyxTableData,
  ObeliskTableData,
  CeresTableData,
  HeraTableData,
  QiTableData,
  RheaTableData,
];
