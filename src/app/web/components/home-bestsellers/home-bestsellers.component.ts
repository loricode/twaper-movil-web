import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-bestsellers',
  templateUrl: './home-bestsellers.component.html',
  styleUrls: ['./home-bestsellers.component.css']
})
export class HomeBestsellersComponent implements OnInit { 

  cellsToShow:number = 3

  ngOnInit(): void {
    if(window.innerWidth <= 300){
      console.log(window.innerWidth)
      this.cellsToShow = 1;
    }
  }

@HostListener('window:resize', ['$event'])
onResize(event:any) {
   
   if(window.innerWidth <= 300){
     this.cellsToShow = 1;
   }else if(window.innerWidth > 1040){
    this.cellsToShow = 3;
   }

}


}
