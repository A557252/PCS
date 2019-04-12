import { NgModule } from '@angular/core';
import { BatchSchedulingsComponent } from './batch-schedulings/batch-schedulings.component';
import { PcsBatchSchedulingComponent } from '../shared/components/pcs-batch-scheduling/pcs-batch-scheduling.component';
import { FsdBatchSchedulingComponent } from '../shared/components/fsd-batch-scheduling/fsd-batch-scheduling.component';
import { SharedModule } from '../shared/material/shared.module';

@NgModule({
  declarations: [
    BatchSchedulingsComponent,    
    PcsBatchSchedulingComponent,
    FsdBatchSchedulingComponent,
    
  ],
  imports: [
    SharedModule,
  ]
})
export class ExportsModule { }
