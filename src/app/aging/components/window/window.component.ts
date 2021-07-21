import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  currentAgeSelector, isAutomaticModeSelector,
  isBrokenSelector,
  isCopperSelector, logSelector, totalCoppersSelector,
  totalGoldSelector,
  totalSheltomsSelector
} from '../../store/aging.selectors';
import { map, tap } from 'rxjs/operators';
import { IncreaseAgeByOne, MakeAgeReq, ResetState, SetAgeChange, SetAutomaticMode, SetCopperStatus } from '../../store/aging.actions';
import { Sheltom } from '../../interfaces/age.interface';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {

  subscriptions = [];
  totalFadeo = 0;
  totalSparky = 0;
  totalRaident = 0;
  totalTransparo = 0;
  totalMurky = 0;
  totalDevine = 0;
  totalCelesto = 0;
  totalMirage = 0;
  totalInferna = 0;
  totalEnigma = 0;
  totalBellum = 0;
  totalOredo = 0;


  currentAge;
  currentAge$ = this.store.pipe(
    select(currentAgeSelector),
    map(currentAge => currentAge),
    tap(currentAge => this.currentAge = currentAge)
  );

  totalGold;
  totalGold$ = this.store.pipe(
    select(totalGoldSelector),
    map(totalGold => totalGold),
    tap(totalGold => this.totalGold = totalGold)
  );

  totalUsedSheltoms;
  totalUsedSheltoms$ = this.store.pipe(
    select(totalSheltomsSelector),
    map(totalUsedSheltoms => totalUsedSheltoms),
    tap(totalUsedSheltoms => this.totalUsedSheltoms = totalUsedSheltoms)
  );

  isBroken;
  isBroken$ = this.store.pipe(
    select(isBrokenSelector),
    map(isBroken => isBroken),
    tap(isBroken => this.isBroken = isBroken)
  );

  isCopper;
  isCopper$ = this.store.pipe(
    select(isCopperSelector),
    map(isCopper => isCopper),
    tap(isCopper => this.isCopper = isCopper)
  );

  totalCoppers;
  totalCoppers$ = this.store.pipe(
    select(totalCoppersSelector),
    map(totalCoppers => totalCoppers),
    tap(totalCoppers => this.totalCoppers = totalCoppers)
  );

  log;
  log$ = this.store.pipe(
    select(logSelector),
    map(log => log),
    tap(log => this.log = log)
  );


  isAutomaticMode;
  isAutomaticMode$ = this.store.pipe(
    select(isAutomaticModeSelector),
    map(isAutomaticMode => isAutomaticMode),
    tap(isAutomaticMode => this.isAutomaticMode = isAutomaticMode)
  );


  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.currentAge$.subscribe(),
      this.totalGold$.subscribe(),
      this.totalUsedSheltoms$.subscribe(),
      this.isBroken$.subscribe(),
      this.isCopper$.subscribe(),
      this.totalCoppers$.subscribe(),
      this.log$.subscribe(),
      this.isAutomaticMode$.subscribe()
    );
  }

  onMakeAge() {
    this.store.dispatch(new MakeAgeReq())
    this.totalFadeo = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.FADEO).length;
    this.totalSparky = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.SPARKY).length;
    this.totalRaident = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.RAIDENT).length;
    this.totalTransparo = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.TRANSPARO).length;
    this.totalMurky = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.MURKY).length;
    this.totalDevine = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.DEVINE).length;
    this.totalCelesto = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.CELESTO).length;
    this.totalMirage = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.MIRAGE).length;
    this.totalInferna = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.INFERNA).length;
    this.totalEnigma = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.ENIGMA).length;
    this.totalBellum = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.BELLUM).length;
    this.totalOredo = this.totalUsedSheltoms.filter(sheltom => sheltom === Sheltom.OREDO).length;
  }

  onUseCopper() {
    this.store.dispatch(new SetCopperStatus({isCopper: true}))
  }

  onRemoveCopper() {
    this.store.dispatch(new SetCopperStatus({isCopper: false}))
  }

  automate() {
    // const ageInterval = setInterval(() => {
    //   this.onMakeAge()
    // }, 90)
    // if (this.currentAge > 4 && this.currentAge < 20 && !this.isBroken && !this.isAutomaticMode) {
    //   this.store.dispatch(new SetAutomaticMode({isAutomatic: true}))
    //   return ageInterval
    // } else if (this.isBroken) {
    //   clearInterval(ageInterval)
    //   this.store.dispatch(new SetAutomaticMode({isAutomatic: true}))
    // }

  }

  reset() {
    this.store.dispatch(new ResetState())

    this.totalFadeo = 0
    this.totalSparky = 0
    this.totalRaident = 0
    this.totalTransparo = 0
    this.totalMurky = 0
    this.totalDevine = 0
    this.totalCelesto = 0
    this.totalMirage = 0
    this.totalInferna = 0
    this.totalEnigma = 0
    this.totalBellum = 0
    this.totalOredo = 0
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
