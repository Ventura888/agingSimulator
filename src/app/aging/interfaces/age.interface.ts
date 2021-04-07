export interface AgeStateInterface {
  currentAge: number;
  totalUsedSheltoms: Array<string>;
  totalGold: number;
  isBroken: boolean;
  isCopper: boolean
  log: Array<number>;
  copperCount: number;
  combinedLog: Array<string>;
}

export enum Sheltom {
  FADEO = 'FADEO',
  SPARKY = 'SPARKY',
  RAIDENT = 'RAIDENT',
  TRANSPARO = 'TRANSPARO',
  MURKY = 'MURKY',
  DEVINE = 'DEVINE',
  CELESTO = 'CELESTO',
  MIRAGE = 'MIRAGE',
  INFERNA = 'INFERNA',
  ENIGMA = 'ENIGMA',
  BELLUM = 'BELLUM',
  OREDO = 'OREDO'
}
