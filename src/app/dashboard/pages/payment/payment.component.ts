import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    console.log("ddw")
    this.dtOptions = {
      lengthMenu:[4,8,12],
      //displayStart:0,
      pageLength: 8
    };
  }

}
