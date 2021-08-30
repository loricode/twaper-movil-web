import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePasarelaComponent } from './pages/home-pasarela/home-pasarela.component';


const routes: Routes = [
  {
    path:'',
    children:[
      { path:'home', component:HomePasarelaComponent },
      { path:'', redirectTo:'home'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasarelaRoutingModule { }
