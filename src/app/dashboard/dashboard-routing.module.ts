import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './pages/home/home-dashboard.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path:'', component:HomeDashboardComponent,
    children:[
      { path:'perfil', component:PerfilComponent },
      { path:'payment', component:PaymentComponent },
      { path:'', redirectTo:'home'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
