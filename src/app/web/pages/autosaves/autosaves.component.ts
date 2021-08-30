import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-autosaves',
  templateUrl: './autosaves.component.html',
  styleUrls: ['./autosaves.component.css']
})
export class AutosavesComponent implements OnInit {
  paquetes = {
    paquetesSmall:[],
    paquetesMicro:[],
    paquetesGiga:[],
    paquetesVip:[]
  }

  title ="AUTO SAVES"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "AUTO SAVES"
  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('autosaves').packageSmall;
    this.paquetes.paquetesMicro = packageReducer('autosaves').packageMicro;
    this.paquetes.paquetesGiga  = packageReducer('autosaves').packageGiga;
    this.paquetes.paquetesVip   = packageReducer('autosaves').packageVip;
    window.scrollTo(0, 0);
  }

}
