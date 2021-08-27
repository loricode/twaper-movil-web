import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly bandera:boolean = true
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
