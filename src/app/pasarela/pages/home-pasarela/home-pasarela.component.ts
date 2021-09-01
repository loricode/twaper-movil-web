import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig,TOOLBAR_POSITION, NgWizardService, StepChangedArgs, StepValidationArgs,TOOLBAR_BUTTON_POSITION, STEP_STATE, THEME } from 'ng-wizard';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home-pasarela',
  templateUrl: './home-pasarela.component.html',
  styleUrls: ['./home-pasarela.component.css']
})
export class HomePasarelaComponent implements OnInit {
  
 showButtonNavigate:boolean = true
  
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    lang:{ next:"Next", previous:"Back"},
    theme: THEME.circles,
  };
 
  constructor(
          private ngWizardService: NgWizardService,
          private router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public goBack():void{
   this.router.navigateByUrl('/home')

  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {   

    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
    window.scrollTo(0, 0);
    if(args.step.index ===  3){ 
      this.showButtonNavigate = true
   }
    if(args.step.index ===  4){ 
       this.showButtonNavigate = false
    }

    console.log(this.showButtonNavigate)

  }

  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

}
