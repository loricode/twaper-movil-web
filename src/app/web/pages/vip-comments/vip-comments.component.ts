import { Component, OnInit } from '@angular/core';
import { packageReducer } from '../../../utils/info';

@Component({
  selector: 'app-vip-comments',
  templateUrl: './vip-comments.component.html'
})
export class VipCommentsComponent implements OnInit {

  paquetes = {
    paquetesSmall:[]
  }

  title ="VIP COMMENTS"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "VIP COMMENTS"
  constructor() { }

  ngOnInit(): void {
    this.paquetes.paquetesSmall = packageReducer('comments').packageSmall;
    window.scrollTo(0, 0);
  }

}
