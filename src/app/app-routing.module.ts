import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/authentication/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './modules/admin/admin.component';
import { UserComponent } from './modules/user/user.component';
import { 
  AuthGuardService as AuthGuard 
} from './layouts/authentication/auth-guard.service';

const routes: Routes = [{
  path: 'default',
  component: DefaultComponent,
  children: [
    {
      path: 'admin',
      component : AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'user',
      component:UserComponent,
      canActivate: [AuthGuard]
    }
  ]
},
{
  path: '',
  component: LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
