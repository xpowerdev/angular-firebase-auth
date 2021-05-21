import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ModuleWithProviders} from '@angular/core';

const app_routes: Routes = [
  { path: '', loadChildren: './pages/layout/layout.module#LayoutModule'},
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule' },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(app_routes)
//   ],
//   exports: [
//     RouterModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(app_routes);
