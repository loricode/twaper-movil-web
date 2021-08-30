import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-auto-likes',
  templateUrl: './auto-likes.component.html',
  styleUrls: ['./auto-likes.component.css']
})
export class AutoLikesComponent implements OnInit{

   paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }

  title ="AUTO LIKES"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "AUTO LIKES"
  pt="100"
  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('autolikes').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('autolikes').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('autolikes').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('autolikes').packageVip;
    window.scrollTo(0, 0);
  }

}
