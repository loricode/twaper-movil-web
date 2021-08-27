import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';

/* 
  --path--
 1. login 
 2. registrarse
 3. ingresar codigo para cambio de contraseña
 4. ingresar email para pedir el codigo
*/

const routes: Routes = [
   
  { path:'',
    children:[
      { path:'login', component:LoginComponent },
      { path:'register', component:RegisterComponent},
      { path:'recover', component:RecoverAccountComponent },
      { path:'password', component:RecoverPasswordComponent}    
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
