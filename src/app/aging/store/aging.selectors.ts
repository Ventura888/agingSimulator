import { AgeStateInterface } from '../interfaces/age.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const ageFeatureState = createFeatureSelector<AgeStateInterface>('age');


export const currentAgeSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.currentAge);

export const totalGoldSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.totalGold);

export const totalSheltomsSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.totalUsedSheltoms);

export const isBrokenSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.isBroken);

export const isCopperSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.isCopper);

export const totalCoppersSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.copperCount);

export const logSelector = createSelector(ageFeatureState, (state: AgeStateInterface) => state.combinedLog);
