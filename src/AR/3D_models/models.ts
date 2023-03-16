import { model } from "./model";

//Chairs
import { WoodenSofaData } from "./Chairs/Data/WoodenSofaData";

//Lamps
import { MarioFloorLampData } from "./Lamps/Data/MarioFloorLampData"
import { LampData } from "./Lamps/Data/LampData";

//Misc
import { MilleniumFalconData } from "./Misc/Data/MilleniumFalconData"

//Tables
import { VictorianCoffeeTableData } from "./Tables/Data/VictorianCoffeeTableData";
import { WoodenTable2Data } from "./Tables/Data/WoodenTable2Data";

export const models: model[] = [
  
    WoodenSofaData,

    LampData,
    MarioFloorLampData,
    
    MilleniumFalconData,
    
    VictorianCoffeeTableData,
    WoodenTable2Data,
];
