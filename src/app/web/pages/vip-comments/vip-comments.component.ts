import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-comments',
  templateUrl: './vip-comments.component.html'
})
export class VipCommentsComponent implements OnInit {

  title ="VIP COMMENTS"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "VIP COMMENTS"
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
