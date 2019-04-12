import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchSchedulingsComponent } from './batch-schedulings/batch-schedulings.component';
import { PcsBatchSchedulingComponent } from '../shared/components/pcs-batch-scheduling/pcs-batch-scheduling.component';
import { FsdBatchSchedulingComponent } from '../shared/components/fsd-batch-scheduling/fsd-batch-scheduling.component';

@NgModule({
  declarations: [
    BatchSchedulingsComponent,    
    PcsBatchSchedulingComponent,
    FsdBatchSchedulingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExportsModule { }
