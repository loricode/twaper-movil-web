import { Component, OnInit} from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-auto-views',
  templateUrl: './auto-views.component.html',
  styleUrls: ['./auto-views.component.css']
})
export class AutoViewsComponent implements OnInit{
  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }

  title ="Auto Views"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "Auto Views"
  pt="100"
  constructor() { }

  ngOnInit(): void {
          
    this.paquetes.paquetesSmall = packageReducer('autoviews').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('autoviews').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('autoviews').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('autoviews').packageVip;
    window.scrollTo(0, 0);
  }
}
