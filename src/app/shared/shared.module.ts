import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NavbarComponent } from './navbar/navbar.component';
import { BrandAreaComponent } from './brand-area/brand-area.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageComponent } from './language/language.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import { CoreModule } from '../core/core.module';
import { CardsPackagesComponent } from './cards-packages/cards-packages.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
      BrandAreaComponent,
      FooterComponent,
      NavbarComponent,
      HeaderComponent,
      LanguageComponent,
      ContentComponent,
      CardsPackagesComponent,
      ComingsoonComponent,
      SidebarComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule,
    CoreModule,
  ],
  exports:[
    NavbarComponent,
    BrandAreaComponent,
    FooterComponent,
    HeaderComponent,
    LanguageComponent,
    ContentComponent,
    CardsPackagesComponent,
    ComingsoonComponent,
    SidebarComponent 
  ]
})
export class SharedModule { }
