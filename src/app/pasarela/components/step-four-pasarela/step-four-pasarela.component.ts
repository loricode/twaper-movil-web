import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-four-pasarela',
  templateUrl: './step-four-pasarela.component.html',
  styleUrls: ['./step-four-pasarela.component.css']
})
export class StepFourPasarelaComponent implements OnInit {

  state ={
    tab:{
      autenticacion:false,
      newUser:true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public tabChangeNewUser():void {
   
    this.state = {
       tab:{ autenticacion:false, newUser:true }
    }
  }

  public tabChangeAutenticacion():void {
    this.state = {
       tab:{ newUser:false, autenticacion:true }
    }
  }
}
