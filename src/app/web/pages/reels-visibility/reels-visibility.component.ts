import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';


@Component({
  selector: 'app-reels-visibility',
  templateUrl: './reels-visibility.component.html',
  styleUrls: ['./reels-visibility.component.css']
})
export class ReelsVisibilityComponent implements OnInit{

  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }

  title ="Reels Visibility"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "REELS VISIBILITY"
  constructor() { }

  ngOnInit(): void {
      
    this.paquetes.paquetesSmall = packageReducer('reels').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('reels').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('reels').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('reels').packageVip;
    window.scrollTo(0, 0);
  }

}
