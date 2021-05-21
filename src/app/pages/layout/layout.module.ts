import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { ModuleRouting } from './/layout-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from '../admin/admin.component';
import { FAuthService } from '../../service/f-auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModuleRouting
  ],
  providers: [
    FAuthService
  ],
  declarations: [LayoutComponent, DashboardComponent, AuthComponent, AdminComponent]
})
export class LayoutModule { }
