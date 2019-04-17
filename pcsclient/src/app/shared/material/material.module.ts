import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, 
  MatButtonModule, MatSidenavModule, MatRadioModule, MatSelectModule, MatExpansionModule,
  MatToolbarModule, MatBadgeModule, MatDialogModule, MatDividerModule } from '@angular/material';

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
    MatDialogModule,
    MatDividerModule
  ]
})
export class MaterialModule { }