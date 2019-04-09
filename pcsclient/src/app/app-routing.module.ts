import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { IncraImportWizardComponent } from './incra-import-wizard/incra-import-wizard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: SideMenuComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'wizards/incrawizard', component: IncraImportWizardComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
