import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-igtv',
  templateUrl: './igtv.component.html',
  styleUrls: ['./igtv.component.css']
})
export class IgtvComponent implements OnInit {

  title ="IGTV"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "IGTV"
  pt="100"

  
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
