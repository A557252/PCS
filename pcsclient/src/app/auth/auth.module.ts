import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [LoginComponent, SettingComponent, HelpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
})
export class AuthModule { }
