import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { WebRoutingModule } from './web-routing.module';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeContentOrganizeShowComponent } from './components/home-content-organize-show/home-content-organize-show.component';
import { HomeImageVideoComponent } from './components/home-image-video/home-image-video.component';
import { HomeBestsellersComponent } from './components/home-bestsellers/home-bestsellers.component';
import { HomePricingAreaComponent } from './components/home-pricing-area/home-pricing-area.component';
import { HomeTestimonialComponent } from './components/home-testimonial/home-testimonial.component';
import { HomeFreeResourcesComponent } from './components/home-free-resources/home-free-resources.component';
import { HomeBlogAreaComponent } from './components/home-blog-area/home-blog-area.component';
import { SharedModule } from '../shared/shared.module';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { AllServiceCoperturaComponent } from './components/all-service-copertura/all-service-copertura.component';
import { AllServicePackagesComponent } from './components/all-service-packages/all-service-packages.component';
import { AllServiceAboutComponent } from './components/all-service-about/all-service-about.component';
import { AllServiceVideoComponent } from './components/all-service-video/all-service-video.component';
import { ReelsVisibilityComponent } from './pages/reels-visibility/reels-visibility.component';
import { IgtvComponent } from './pages/igtv/igtv.component';
import { AutoLikesComponent } from './pages/auto-likes/auto-likes.component';
import { AllInclusiveComponent } from './pages/all-inclusive/all-inclusive.component';
import { AutoViewsComponent } from './pages/auto-views/auto-views.component';
import { VipCommentsComponent } from './pages/vip-comments/vip-comments.component';
import { ImpressionsComponent } from './pages/impressions/impressions.component';
import { ContentCreationComponent } from './pages/content-creation/content-creation.component';
import { AutosavesComponent } from './pages/autosaves/autosaves.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeContentOrganizeShowComponent,
    HomeImageVideoComponent,
    HomeBestsellersComponent,
    HomePricingAreaComponent,
    HomeTestimonialComponent,
    HomeFreeResourcesComponent,
    HomeBlogAreaComponent,
    AllServicesComponent,
    AllServiceCoperturaComponent,
    AllServicePackagesComponent,
    AllServiceAboutComponent,
    AllServiceVideoComponent,
    ReelsVisibilityComponent,
    IgtvComponent,
    AutoLikesComponent,
    AllInclusiveComponent,
    AutoViewsComponent,
    VipCommentsComponent,
    ImpressionsComponent,
    ContentCreationComponent,
    AutosavesComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    CoreModule,
    IvyCarouselModule,
    SharedModule,
 
  ]
})
export class WebModule { }
