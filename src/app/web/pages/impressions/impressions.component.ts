import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html'
})
export class ImpressionsComponent implements OnInit {

  title ="IMPRESSIONS"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "IMPRESSIONS"
  pt="100"

  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
