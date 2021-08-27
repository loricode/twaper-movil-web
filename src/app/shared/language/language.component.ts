import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  langs:string[] = [];
  selected:string = 'it'

  constructor(private translate: TranslateService) { 
    this.langs = ['es', 'en','it'];
    this.translate.addLangs(this.langs);
    this.translate.setDefaultLang('it');
    this.translate.use('it')

  }

  changeLang(langs:string){
    this.selected = langs
    this.translate.use(langs)
  }

}
