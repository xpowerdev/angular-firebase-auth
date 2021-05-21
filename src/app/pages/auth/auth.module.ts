import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ModuleRouting } from './/auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FAuthService } from '../../service/f-auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleRouting
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    FAuthService
  ]
})
export class AuthModule { }
