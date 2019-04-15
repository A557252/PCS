import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { HomeModule } from './home/home.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncraImportWizardComponent } from './incra-import-wizard/incra-import-wizard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ExportsModule } from './exports/exports.module';
import { MatProgressBarModule, MatDialogModule } from '@angular/material';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    IncraImportWizardComponent,
    SideMenuComponent,
    NotImplementedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ExportsModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [AuthenticationService,AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
