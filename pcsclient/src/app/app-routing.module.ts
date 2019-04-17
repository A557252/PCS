import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { IncraImportWizardComponent } from './incra-import-wizard/incra-import-wizard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BatchSchedulingsComponent } from './exports/batch-schedulings/batch-schedulings.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { IncraImportWizardSubmitComponent } from './incra-import-wizard/incra-impot-wizard-submit/incra-impot-wizard-submit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: SideMenuComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'wizards/incrawizard', component: IncraImportWizardComponent },
      {path:'exports/batchscheduling',component:BatchSchedulingsComponent},
      { path: 'wizards/submitImportIncraWizard', component: IncraImportWizardSubmitComponent },
      {path:'umimplemented',component:NotImplementedComponent}
    ],
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
