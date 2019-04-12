import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, 
  MatButtonModule, MatSidenavModule, MatRadioModule, MatSelectModule, MatExpansionModule,
  MatToolbarModule, MatBadgeModule, MatDialogModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
