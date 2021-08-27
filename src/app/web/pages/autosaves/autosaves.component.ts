import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autosaves',
  templateUrl: './autosaves.component.html',
  styleUrls: ['./autosaves.component.css']
})
export class AutosavesComponent implements OnInit {

  title ="AUTO SAVES"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "AUTO SAVES"
  constructor() { }

  ngOnInit(): void {
  }

}
