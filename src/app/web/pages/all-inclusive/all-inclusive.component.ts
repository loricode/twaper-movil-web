import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-inclusive',
  templateUrl: './all-inclusive.component.html',
  styleUrls: ['./all-inclusive.component.css']
})
export class AllInclusiveComponent implements OnInit {

  title ="ALL INCLUSIVE"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "ALL INCLUSIVE"
  pt="100"

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
