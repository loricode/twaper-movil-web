import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeDashboardComponent } from './pages/home/home-dashboard.component';
import { SidebarDashboardComponent } from './components/sidebar-dashboard/sidebar-dashboard.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    HomeDashboardComponent,
    SidebarDashboardComponent,
    PerfilComponent,
    NavbarDashboardComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule
   
  ]
})
export class DashboardModule { }
