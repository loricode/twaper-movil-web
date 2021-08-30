import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:'', 
    redirectTo:'',
    pathMatch: 'full'
  },
  { 
    path:'', 
    loadChildren:() => import('./web/web.module').then( m => m.WebModule )
  },
  { 
    path:'auth', 
    loadChildren:() => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { 
    path:'dashboard', 
    loadChildren:() => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
  },
  { 
    path:'pasarela', 
    loadChildren:() => import('./pasarela/pasarela.module').then( m => m.PasarelaModule )
  },
//  {path:"**", redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
