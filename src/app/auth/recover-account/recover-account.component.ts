import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.css']
})
export class RecoverAccountComponent implements OnInit {

  constructor( private fb:FormBuilder ) { }

  authForm =  this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }



}
