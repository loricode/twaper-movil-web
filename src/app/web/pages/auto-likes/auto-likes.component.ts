import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-likes',
  templateUrl: './auto-likes.component.html',
  styleUrls: ['./auto-likes.component.css']
})
export class AutoLikesComponent implements OnInit{

  title ="AUTO LIKES"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "AUTO LIKES"
  pt="100"
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
