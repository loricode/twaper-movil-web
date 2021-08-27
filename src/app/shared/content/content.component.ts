import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input('title') title:string = ""
  @Input('subTitle') subTitle:string = ""
  @Input('imagenOne')  imagenOne:string = ""
  @Input('textUpImagen') textUpImagen:string = ""
  @Input('question') question:string = ""
  @Input('parrafo') parrafo:string = ""
  @Input('listItemOne') listItemOne:string = ""
  @Input('listItemTwo') listItemTwo:string = ""
  @Input('listItemThree') listItemThree:string = ""
  @Input('imagenParrafo') imagenParrafo:string = ""

  @Input('TitleDescription') TitleDescription:string = ""
  @Input('description') description:string = ""

  @Input('TitleDescriptionTwo') TitleDescriptionTwo:string = ""
  @Input('descriptionTwo') descriptionTwo:string = ""

  //imagen grid
  @Input('imagenGridOne') imagenGridOne:string = ""
  @Input('imagenGridTwo') imagenGridTwo:string = ""
  @Input('imagenGridThree') imagenGridThree:string = ""
  @Input('imagenGridFour') imagenGridFour:string = ""
  
  constructor() { }


}
