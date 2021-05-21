import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from '../admin/admin.component';

const layout_routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'admin', component: AdminComponent}
    ]
  }
]

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forChild(layout_routes)
//   ],
//   exports: [
//     RouterModule
//   ],
//   declarations: []
// })
// export class LayoutRoutingModule { }

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(layout_routes);
