import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  AddToCombinedLog,
  AddToTotalGold,
  AddToTotalSheltoms,
  AgeActionTypes,
  BreakItem,
  IncreaseCopperCount,
  MakeAgeReq,
  SetAgeChange
} from './aging.actions';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { currentAgeSelector, isCopperSelector } from './aging.selectors';
import { Sheltom } from '../interfaces/age.interface';

@Injectable()
export class AgeEffects {

  constructor(private actions$: Actions, private store: Store<any>) {
  }

  @Effect()
  onMakeAgeReq = this.actions$.pipe(
    ofType(AgeActionTypes.MAKE_AGE_REQ),
    withLatestFrom(this.store.select(currentAgeSelector), this.store.select(isCopperSelector)),
    mergeMap(([action, currentAge, isCopper]: [MakeAgeReq, number, boolean]) => {
        switch (currentAge) {
          case 0: {
            const goingOneRandomNum = Math.random();
            if (goingOneRandomNum > 0.4) {
              return [
                new SetAgeChange({ changedBy: 2 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            }
          }

          case 1: {
            const goingTwoRandomNum = Math.random();
            if (goingTwoRandomNum > 0.45) {
              return [
                new SetAgeChange({ changedBy: 2 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            }
          }

          case 2: {
            const goingThreeRandomNum = Math.random();
            if (goingThreeRandomNum > 0.5) {
              return [
                new SetAgeChange({ changedBy: 2 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            }
          }

          case 3: {
            const goingFourRandomNum = Math.random();
            if (goingFourRandomNum > 0.55) {
              return [
                new SetAgeChange({ changedBy: 2 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            }
          }

          case 4: {
            const goingFiveRandomNum = Math.random();
            if (goingFiveRandomNum > 0.6) {
              return [
                new SetAgeChange({ changedBy: 2 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            }
          }

          case 5: {
            const goingSixRandomNum = Math.random();
            if (goingSixRandomNum < 0.96) {
              const goingSixSuccessRandomNum = Math.random();
              if (goingSixSuccessRandomNum > 0.65) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingSixFailRandomNum = Math.random();
              if (goingSixFailRandomNum >= 0.99) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ]
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }

              } else if (goingSixFailRandomNum < 0.99 && goingSixFailRandomNum > 0.97) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingSixFailRandomNum <= 0.97) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 6: {
            const goingSevenRandomNum = Math.random();
            if (goingSevenRandomNum < 0.88) {
              const goingSevenSuccessRandomNum = Math.random();
              if (goingSevenSuccessRandomNum > 0.70) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingSevenFailRandomNum = Math.random();
              if (goingSevenFailRandomNum >= 0.98) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
                return [ new BreakItem() ]
              } else if (goingSevenFailRandomNum < 0.98 && goingSevenFailRandomNum > 0.94) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingSevenFailRandomNum <= 0.94) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 7: {
            const goingEightRandomNum = Math.random();
            if (goingEightRandomNum < 0.88) {
              const goingEightSuccessRandomNum = Math.random();
              if (goingEightSuccessRandomNum > 0.75) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingEightFailRandomNum = Math.random();
              if (goingEightFailRandomNum >= 0.97) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingEightFailRandomNum < 0.97 && goingEightFailRandomNum > 0.91) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingEightFailRandomNum <= 0.91) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.FADEO, Sheltom.FADEO, Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 8: {
            const goingNineRandomNum = Math.random();
            if (goingNineRandomNum < 0.84) {
              const goingNineSuccessRandomNum = Math.random();
              if (goingNineSuccessRandomNum > 0.8) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingNineFailRandomNum = Math.random();
              if (goingNineFailRandomNum >= 0.96) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingNineFailRandomNum < 0.96 && goingNineFailRandomNum > 0.88) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingNineFailRandomNum <= 0.88) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 9: {
            const goingTenRandomNum = Math.random();
            if (goingTenRandomNum < 0.8) {
              const goingTenSuccessRandomNum = Math.random();
              if (goingTenSuccessRandomNum > 0.85) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingTenFailRandomNum = Math.random();
              if (goingTenFailRandomNum >= 0.95) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingTenFailRandomNum < 0.95 && goingTenFailRandomNum > 0.85) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingTenFailRandomNum <= 0.85) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.SPARKY, Sheltom.SPARKY, Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 10: {
            const goingElevenRandomNum = Math.random();
            if (goingElevenRandomNum < 0.76) {
              const goingElevenSuccessRandomNum = Math.random();
              if (goingElevenSuccessRandomNum > 0.9) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingElevenFailRandomNum = Math.random();
              if (goingElevenFailRandomNum >= 0.94) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingElevenFailRandomNum < 0.94 && goingElevenFailRandomNum > 0.82) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingElevenFailRandomNum <= 0.82) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 11: {
            const goingTwelveRandomNum = Math.random();
            if (goingTwelveRandomNum < 0.72) {
              const goingTwelveSuccessRandomNum = Math.random();
              if (goingTwelveSuccessRandomNum > 0.95) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingTwelveFailRandomNum = Math.random();
              if (goingTwelveFailRandomNum >= 0.93) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingTwelveFailRandomNum < 0.93 && goingTwelveFailRandomNum > 0.79) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingTwelveFailRandomNum <= 0.79) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.RAIDENT, Sheltom.RAIDENT, Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 12: {
            const goingThirteenRandomNum = Math.random();
            if (goingThirteenRandomNum < 0.68) {
              const goingThirteenSuccessRandomNum = Math.random();
              if (goingThirteenSuccessRandomNum > 0.95) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingThirteenFailRandomNum = Math.random();
              if (goingThirteenFailRandomNum >= 0.92) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingThirteenFailRandomNum < 0.92 && goingThirteenFailRandomNum > 0.76) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingThirteenFailRandomNum <= 0.76) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 13: {
            const goingFourteenRandomNum = Math.random();
            if (goingFourteenRandomNum < 0.64) {
              const goingFourteenSuccessRandomNum = Math.random();
              if (goingFourteenSuccessRandomNum > 0.96) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingFourteenFailRandomNum = Math.random();
              if (goingFourteenFailRandomNum >= 0.91) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingFourteenFailRandomNum < 0.91 && goingFourteenFailRandomNum > 0.73) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingFourteenFailRandomNum <= 0.73) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.TRANSPARO, Sheltom.TRANSPARO, Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 14: {
            const goingFifteenRandomNum = Math.random();
            if (goingFifteenRandomNum < 0.60) {
              const goingFifteenSuccessRandomNum = Math.random();
              if (goingFifteenSuccessRandomNum > 0.96) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingFIFTEENFailRandomNum = Math.random();
              if (goingFIFTEENFailRandomNum >= 0.9) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingFIFTEENFailRandomNum < 0.9 && goingFIFTEENFailRandomNum > 0.7) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingFIFTEENFailRandomNum <= 0.7) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 15: {
            const goingSixteenRandomNum = Math.random();
            if (goingSixteenRandomNum < 0.56) {
              const goingSixteenSuccessRandomNum = Math.random();
              if (goingSixteenSuccessRandomNum > 0.97) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingSixteenFailRandomNum = Math.random();
              if (goingSixteenFailRandomNum >= 0.89) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingSixteenFailRandomNum < 0.89 && goingSixteenFailRandomNum > 0.67) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingSixteenFailRandomNum <= 0.67) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.MURKY, Sheltom.MURKY, Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 16: {
            const goingSeventeenRandomNum = Math.random();
            if (goingSeventeenRandomNum < 0.52) {
              const goingSeventeenSuccessRandomNum = Math.random();
              if (goingSeventeenSuccessRandomNum > 0.97) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingSeventeenFailRandomNum = Math.random();
              if (goingSeventeenFailRandomNum >= 0.88) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingSeventeenFailRandomNum < 0.88 && goingSeventeenFailRandomNum > 0.64) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingSeventeenFailRandomNum <= 0.64) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 17: {
            const goingEighteenRandomNum = Math.random();
            if (goingEighteenRandomNum < 0.48) {
              const goingEighteenSuccessRandomNum = Math.random();
              if (goingEighteenSuccessRandomNum > 0.98) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingEighteenFailRandomNum = Math.random();
              if (goingEighteenFailRandomNum >= 0.87) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingEighteenFailRandomNum < 0.87 && goingEighteenFailRandomNum > 0.61) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingEighteenFailRandomNum <= 0.61) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.DEVINE, Sheltom.DEVINE, Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 18: {
            const goingNineteenRandomNum = Math.random();
            if (goingNineteenRandomNum < 0.44) {
              const goingNineteenSuccessRandomNum = Math.random();
              if (goingNineteenSuccessRandomNum > 0.99) {
                return [
                  new SetAgeChange({ changedBy: 2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else {
                return [
                  new SetAgeChange({ changedBy: 1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            } else {
              const goingEighteenFailRandomNum = Math.random();
              if (goingEighteenFailRandomNum >= 0.86) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingEighteenFailRandomNum < 0.86 && goingEighteenFailRandomNum > 0.58) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingEighteenFailRandomNum <= 0.58) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

          case 19: {
            const goingNineteenRandomNum = Math.random();
            if (goingNineteenRandomNum < 0.40) {
              return [
                new SetAgeChange({ changedBy: 1 }),
                new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO, Sheltom.OREDO] }),
                new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
              ];
            } else {
              const goingEighteenFailRandomNum = Math.random();
              if (goingEighteenFailRandomNum >= 0.85) {
                if (!isCopper) {
                  return [
                    new BreakItem(),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO, Sheltom.OREDO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                } else {
                  return [
                    new SetAgeChange({ changedBy: -1 }),
                    new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO, Sheltom.OREDO] }),
                    new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                  ];
                }
              } else if (goingEighteenFailRandomNum < 0.85 && goingEighteenFailRandomNum > 0.55) {
                return [
                  new SetAgeChange({ changedBy: -2 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              } else if (goingEighteenFailRandomNum <= 0.55) {
                return [
                  new SetAgeChange({ changedBy: -1 }),
                  new AddToTotalSheltoms({ sheltoms: [Sheltom.CELESTO, Sheltom.CELESTO, Sheltom.MIRAGE, Sheltom.MIRAGE, Sheltom.INFERNA, Sheltom.INFERNA, Sheltom.ENIGMA, Sheltom.ENIGMA, Sheltom.BELLUM, Sheltom.BELLUM, Sheltom.OREDO, Sheltom.OREDO] }),
                  new AddToTotalGold({gold: (300000 * 2.75) * (1 + currentAge)})
                ];
              }
            }
          }

        }
      }
    )
  );

  @Effect()
  onAgeChangeAddToLog = this.actions$.pipe(
    ofType(AgeActionTypes.SET_AGE_CHANGE),
    withLatestFrom(this.store.select(currentAgeSelector)),
    mergeMap(([action, currentAge]: [SetAgeChange, number]) => {
      return [
        new AddToCombinedLog({ageResult: action.payload.changedBy, currentAge: currentAge + 1 - action.payload.changedBy})
      ]
    })
  )

  @Effect()
  onMakeAgeReqIncreaseCopperCount = this.actions$.pipe(
    ofType(AgeActionTypes.MAKE_AGE_REQ),
    withLatestFrom(this.store.select(isCopperSelector)),
    filter(([action, isCopper]: [MakeAgeReq, boolean]) => isCopper === true),
    mergeMap(([action, isCopper]: [MakeAgeReq, boolean]) => {
          return [new IncreaseCopperCount()]
    })
  )
}
