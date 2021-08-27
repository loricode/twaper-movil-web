import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.css']
})
export class ContentCreationComponent implements OnInit {

  title ="CONTENT CREATION"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "CONTENT CREATION"

  constructor() { }

  ngOnInit(): void {
  }

}
