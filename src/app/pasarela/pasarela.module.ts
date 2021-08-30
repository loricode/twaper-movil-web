import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePasarelaComponent } from './pages/home-pasarela/home-pasarela.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { PasarelaRoutingModule } from './pasarela-routing.module';
import { StepOnePasarelaComponent } from './components/step-one-pasarela/step-one-pasarela.component';
import { StepTwoPasarelaComponent } from './components/step-two-pasarela/step-two-pasarela.component';
import { StepThreePasarelaComponent } from './components/step-three-pasarela/step-three-pasarela.component';
import { StepFourPasarelaComponent } from './components/step-four-pasarela/step-four-pasarela.component';
import { StepFivePasarelaComponent } from './components/step-five-pasarela/step-five-pasarela.component';
 
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};

@NgModule({
  declarations: [
    HomePasarelaComponent,
    StepOnePasarelaComponent,
    StepTwoPasarelaComponent,
    StepThreePasarelaComponent,
    StepFourPasarelaComponent,
    StepFivePasarelaComponent
  ],
  imports: [
    CommonModule,
    PasarelaRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class PasarelaModule { }
