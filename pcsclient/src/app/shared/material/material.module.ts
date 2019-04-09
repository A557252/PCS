import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, 
  MatButtonModule, MatSidenavModule, MatRadioModule, MatSelectModule, MatExpansionModule } from '@angular/material';

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
    MatExpansionModule
  ]
})
export class MaterialModule { }
