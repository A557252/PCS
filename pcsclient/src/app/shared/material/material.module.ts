import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
