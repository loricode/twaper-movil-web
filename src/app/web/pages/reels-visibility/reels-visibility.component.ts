import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels-visibility',
  templateUrl: './reels-visibility.component.html',
  styleUrls: ['./reels-visibility.component.css']
})
export class ReelsVisibilityComponent implements OnInit{

  title ="Reels Visibility"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "REELS VISIBILITY"
  pt="100"
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
