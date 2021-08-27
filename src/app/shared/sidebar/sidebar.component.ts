import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showSubMenu:boolean = false
  @Output() eventCloseMenu = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
   
  }

  public handleChangeShowMenu():void{
    this.eventCloseMenu.emit(false)
  }

   public changeShowSubMenu(){
     this.showSubMenu = !this.showSubMenu
   }

   
}
