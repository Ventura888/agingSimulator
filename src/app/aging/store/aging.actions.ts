import { Action } from '@ngrx/store';

export enum AgeActionTypes {
  MAKE_AGE_REQ = 'MAKE_AGE_REQ',
  SET_AGE_CHANGE = 'SET_AGE_CHANGE',
  INCRAEASE_AGE_BY_ONE = 'INCRAEASE_AGE_BY_ONE',
  ADD_TO_TOTAL_SHELTOMS = 'ADD_TO_TOTAL_SHELTOMS',
  ADD_TO_TOTAL_GOLD = 'ADD_TO_TOTAL_GOLD',
  BREAK_ITEM = 'BREAK_ITEM',
  SET_COPPER_STATUS = 'SET_COPPER_STATUS',
  INCREASE_COPPER_COUNT = 'INCREASE_COPPER_COUNT',
  ADD_TO_COMBINED_LOG = 'ADD_TO_COMBINED_LOG',
  RESET_STATE = 'RESET_STATE',
  SET_AUTOMATIC_MODE = 'SET_AUTOMATIC_MODE'
}

export type AgeActions =
  MakeAgeReq |
  SetAgeChange |
  IncreaseAgeByOne |
  AddToTotalSheltoms |
  AddToTotalGold |
  BreakItem |
  SetCopperStatus |
  IncreaseCopperCount |
  AddToCombinedLog |
  ResetState |
  SetAutomaticMode




export class MakeAgeReq implements Action {
  readonly type = AgeActionTypes.MAKE_AGE_REQ;

  constructor() {}
}

export interface SetAgeChangePayload {
  changedBy: number;
}

export class SetAgeChange implements Action {
  readonly type = AgeActionTypes.SET_AGE_CHANGE;

  constructor(public payload: SetAgeChangePayload) {}
}

export class IncreaseAgeByOne implements Action {
  readonly type = AgeActionTypes.INCRAEASE_AGE_BY_ONE;

  constructor() {}
}

export interface AddToTotalSheltomsPayload {
  sheltoms: Array<string>;
}

export class AddToTotalSheltoms implements Action {
  readonly type = AgeActionTypes.ADD_TO_TOTAL_SHELTOMS;

  constructor(public payload: AddToTotalSheltomsPayload) {}
}



export interface AddToTotalGoldPayload {
  gold: number;
}

export class AddToTotalGold implements Action {
  readonly type = AgeActionTypes.ADD_TO_TOTAL_GOLD;

  constructor(public payload: AddToTotalGoldPayload) {}
}


export class BreakItem implements Action {
  readonly type = AgeActionTypes.BREAK_ITEM;

  constructor() {}
}

export interface SetCopperStatusPayload {
  isCopper: boolean;
}

export class SetCopperStatus implements Action {
  readonly type = AgeActionTypes.SET_COPPER_STATUS;

  constructor(public payload: SetCopperStatusPayload) {}
}

export class IncreaseCopperCount implements Action {
  readonly type = AgeActionTypes.INCREASE_COPPER_COUNT;

  constructor() {}
}


export interface AddToCombinedLogPayload {
  ageResult: number;
  currentAge: number;
}

export class AddToCombinedLog implements Action {
  readonly type = AgeActionTypes.ADD_TO_COMBINED_LOG;

  constructor(public payload: AddToCombinedLogPayload) {}
}


export class ResetState implements Action {
  readonly type = AgeActionTypes.RESET_STATE;

  constructor() {}
}



export interface SetAutomaticModePayload {
  isAutomatic: boolean;
}

export class SetAutomaticMode implements Action {
  readonly type = AgeActionTypes.SET_AUTOMATIC_MODE;

  constructor(public payload: SetAutomaticModePayload) {}
}
