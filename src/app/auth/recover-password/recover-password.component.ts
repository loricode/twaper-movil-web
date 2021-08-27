import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor( private fb:FormBuilder, private router: Router) { }

  authForm =  this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public buttonNext(){
    this.router.navigate(['/auth/recover'])
  }

}
