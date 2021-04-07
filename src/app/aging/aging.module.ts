import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ageReducer } from './store/aging.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AgeEffects } from './store/aging.effects';
import { WindowComponent } from './components/window/window.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [WindowComponent],
  exports: [
    WindowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forFeature('age', ageReducer),
    EffectsModule.forFeature([AgeEffects])
  ]
})
export class AgingModule { }
