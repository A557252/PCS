import { Component, OnInit } from '@angular/core';
import { FsdSchedulingServicesService } from '../../services/fsd-scheduling-services.service';

@Component({
  selector: 'app-fsd-batch-scheduling',
  templateUrl: './fsd-batch-scheduling.component.html',
  styleUrls: ['./fsd-batch-scheduling.component.sass']
})
export class FsdBatchSchedulingComponent implements OnInit {

  fsdData=[];
  constructor(private fsdBatchScheduling:FsdSchedulingServicesService) { }

  ngOnInit() {
    this.fsdBatchScheduling.getAllFsdSchedulingData()
    .subscribe(
      (response=[])=>{
        this.fsdData.push(response);
        console.log(response)
      },
      error=>{
        console.log("some error ocured");
      }
    )
  }



}
