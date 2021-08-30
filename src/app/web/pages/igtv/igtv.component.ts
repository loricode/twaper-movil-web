import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-igtv',
  templateUrl: './igtv.component.html',
  styleUrls: ['./igtv.component.css']
})
export class IgtvComponent implements OnInit {
  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }

  title ="IGTV"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "IGTV"
 
  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('igtv').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('igtv').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('igtv').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('igtv').packageVip;
    window.scrollTo(0, 0);
  }

}
