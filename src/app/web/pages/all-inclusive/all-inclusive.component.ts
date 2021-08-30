import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-all-inclusive',
  templateUrl: './all-inclusive.component.html',
  styleUrls: ['./all-inclusive.component.css']
})
export class AllInclusiveComponent implements OnInit {

  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }


  title ="ALL INCLUSIVE"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "ALL INCLUSIVE"
  pt="100"

  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('inclusive').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('inclusive').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('inclusive').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('inclusive').packageVip;
    window.scrollTo(0, 0);
  }
}
