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
import { IncraImportWizardSubmitComponent } from './incra-import-wizard/incra-impot-wizard-submit/incra-impot-wizard-submit.component';
import { SharedModule } from './shared/material/shared.module';
import { DialogComponent } from './shared/dialog/dialog.component';
import { CardLayoutComponent } from './shared/components/card-layout/card-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    IncraImportWizardComponent,
    SideMenuComponent,
    NotImplementedComponent,
    IncraImportWizardSubmitComponent,
    CardLayoutComponent
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
    SharedModule
  ],
  providers: [AuthenticationService,AuthenticationGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
