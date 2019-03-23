import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, SettingComponent, HelpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
