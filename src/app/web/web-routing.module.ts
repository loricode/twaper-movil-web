import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AllInclusiveComponent } from './pages/all-inclusive/all-inclusive.component';

import { AllServicesComponent } from './pages/all-services/all-services.component';
import { AutoLikesComponent } from './pages/auto-likes/auto-likes.component';
import { AutoViewsComponent } from './pages/auto-views/auto-views.component';
import { AutosavesComponent } from './pages/autosaves/autosaves.component';
import { ContentCreationComponent } from './pages/content-creation/content-creation.component';

import { HomeComponent } from './pages/home/home.component';
import { IgtvComponent } from './pages/igtv/igtv.component';
import { ImpressionsComponent } from './pages/impressions/impressions.component';
import { ReelsVisibilityComponent } from './pages/reels-visibility/reels-visibility.component';
import { VipCommentsComponent } from './pages/vip-comments/vip-comments.component';

const routes: Routes = [
   { path:'', 
     children:[  
      { path:'home', component:HomeComponent },
      { path:'services', component:AllServicesComponent },
      { path:'reels', component:ReelsVisibilityComponent },
      { path:'igtv', component:IgtvComponent },
      { path:'inclusive', component:AllInclusiveComponent },
      { path:'autolikes', component:AutoLikesComponent },
      { path:'autoviews', component:AutoViewsComponent },  
      { path:'impressions', component:ImpressionsComponent },
      { path:'comments', component:VipCommentsComponent },
      { path:'autosaves' , component:AutosavesComponent },
      { path:'creation', component:ContentCreationComponent },
      { path:'about', component:AboutComponent},
      { path:'',  redirectTo:'home' },
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }