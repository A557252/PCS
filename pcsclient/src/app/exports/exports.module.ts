import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchSchedulingsComponent } from './batch-schedulings/batch-schedulings.component';
import { PcsBatchSchedulingComponent } from '../shared/components/pcs-batch-scheduling/pcs-batch-scheduling.component';
import { FsdBatchSchedulingComponent } from '../shared/components/fsd-batch-scheduling/fsd-batch-scheduling.component';
import { MatProgressBarModule, MatDialogModule, MatIcon, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BatchSchedulingsComponent,    
    PcsBatchSchedulingComponent,
    FsdBatchSchedulingComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ExportsModule { }
