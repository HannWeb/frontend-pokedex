import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

//components
import { LoginComponent } from 'src/app/auth/page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
