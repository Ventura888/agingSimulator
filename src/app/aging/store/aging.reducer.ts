import { AgeStateInterface } from '../interfaces/age.interface';
import { ageInitState } from './aging.initState';
import {
  AddToCombinedLog,
  AddToTotalGold,
  AddToTotalSheltoms,
  AgeActions,
  AgeActionTypes,
  SetAgeChange,
  SetCopperStatus
} from './aging.actions';

export function ageReducer(state: AgeStateInterface = ageInitState, action: AgeActions): AgeStateInterface {
  switch (action.type) {
    case AgeActionTypes.INCRAEASE_AGE_BY_ONE:
      const age = state.currentAge;
      return { ...state, currentAge: age + 1  }

    case AgeActionTypes.SET_AGE_CHANGE: {
      const currentAge = state.currentAge;
      return { ...state, currentAge: currentAge + (action as SetAgeChange).payload.changedBy }
    }

    case AgeActionTypes.ADD_TO_TOTAL_SHELTOMS: {
      const totalSheltoms = state.totalUsedSheltoms;
      ((action as AddToTotalSheltoms).payload.sheltoms).forEach(sheltom => {
        totalSheltoms.push(sheltom)
      })
      state.totalUsedSheltoms = totalSheltoms;
      return state;
    }

    case AgeActionTypes.ADD_TO_TOTAL_GOLD: {
      const totalGold = state.totalGold;
      return { ...state, totalGold: totalGold + (action as AddToTotalGold).payload.gold }
    }

    case AgeActionTypes.BREAK_ITEM: {
      return {...state, isBroken: true}
    }

    case AgeActionTypes.SET_COPPER_STATUS: {
      return {...state, isCopper: (action as SetCopperStatus).payload.isCopper}
    }

    case AgeActionTypes.INCREASE_COPPER_COUNT: {
      let countClone = state.copperCount;
      countClone++;
      return {...state, copperCount: countClone}
    }

    case AgeActionTypes.ADD_TO_COMBINED_LOG: {
      const combinedLogClone = state.combinedLog;
      const currentAge = (action as AddToCombinedLog).payload.currentAge;
      const ageResult = (action as AddToCombinedLog).payload.ageResult;
      const stringToPush = `Got ${ageResult} attempting ${currentAge}`
      combinedLogClone.push(stringToPush)
      return {...state, combinedLog: combinedLogClone}
    }

    default: {
      return state;
    }
  }
}
