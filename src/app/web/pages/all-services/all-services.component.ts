import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html'
})
export class AllServicesComponent implements OnInit {

  title ="I Nostri Servizi"
  imagen = "../../../assets/img/img-services/servizi_bkg_03.png"
  subTitle = "Servizi"
  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}