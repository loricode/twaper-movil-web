import { Component,OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html'
})
export class ImpressionsComponent implements OnInit {
  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }
  title ="IMPRESSIONS"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "IMPRESSIONS"
  
  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('impressions').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('impressions').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('impressions').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('impressions').packageVip
    window.scrollTo(0, 0);
  }


}
