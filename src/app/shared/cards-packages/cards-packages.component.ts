import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-packages',
  templateUrl: './cards-packages.component.html',
  styleUrls: ['./cards-packages.component.css']
})
export class CardsPackagesComponent implements OnInit {
  
  @Input() cardStyle:       string = ""
  @Input() fontStyle:        string = "" 
  @Input() bars:            string = ""  
  @Input() image:           string = ""
  @Input() title:           string = ""
  @Input() titleParteOne:   string = ""
  @Input() titleParteTwo:   string = ""

  @Input() oneCardPrice:    string = ""
  @Input() cardMonth:       string = ""
  @Input() oneCardInfo:     string = ""
  @Input() oneCardItemOne:  string = ""
  @Input() cardItemTwo:     string = ""
  @Input() oneCardItemThree:string = ""
  @Input() cardItemFour:    string = ""
  @Input() cardItemFive:    string = ""
  @Input() cardItemSix:     string = ""
  @Input() cardItemSeven:   string = ""
  @Input() cardItemEight:   string =""


  @Input() twoCardPrice:    string = ""
  @Input() twoCardInfo:     string = ""
  @Input() twoCardItemOne:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:     string = ""
  @Input() threeCardInfo:      string = ""
  @Input() threeCardItemOne:   string = ""
  @Input() threeCardItemThree: string = ""
 
  constructor() { }

  ngOnInit(): void {
  }

  public payPackage():void{
    console.log("click")
  }

}
