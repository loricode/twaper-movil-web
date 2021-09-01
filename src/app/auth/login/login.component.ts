import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private fb:FormBuilder,
     private authService:AuthService) { }

  myForm =  this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  ngOnInit(): void {
   // this.getPackages()
    window.scrollTo(0, 0);
  }

  public login():void {
    console.log(this.myForm.value)
    this.authService.login(this.myForm.value)
      .subscribe(resp => console.log(resp))
  }
 
  getPackages(){
    this.authService.getPrueba().subscribe(resp => console.log(resp))
  }

}