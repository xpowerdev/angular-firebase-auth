import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const auth_routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
]

// @NgModule({
//   imports: [
//     RouterModule.forChild(auth_routes)
//   ],
//   declarations: []
// })
// export class AuthRoutingModule { }

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(auth_routes);
