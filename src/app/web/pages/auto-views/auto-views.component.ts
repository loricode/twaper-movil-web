import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto-views',
  templateUrl: './auto-views.component.html',
  styleUrls: ['./auto-views.component.css']
})
export class AutoViewsComponent implements OnInit{

  title ="Auto Views"
  imagen = "../../../assets/img/img-services/single_service_bkg.png"
  subTitle = "Auto Views"
  pt="100"
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
