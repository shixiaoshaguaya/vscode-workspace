import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
