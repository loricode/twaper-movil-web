import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  show:boolean = false

  constructor() { }

 public logoClick() {
   this.show = true
 }

  closeMenu(event:boolean){
    this.show = event
  }
  
  

}
