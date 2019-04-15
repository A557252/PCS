import { Component, OnInit } from '@angular/core';
import { FsdSchedulingServicesService } from '../../services/fsd-scheduling-services.service';

@Component({
  selector: 'app-fsd-batch-scheduling',
  templateUrl: './fsd-batch-scheduling.component.html',
  styleUrls: ['./fsd-batch-scheduling.component.scss']
})
export class FsdBatchSchedulingComponent implements OnInit {

  fsdData;
  showSpinner:boolean=true;
  constructor(private fsdBatchScheduling:FsdSchedulingServicesService) { }

  ngOnInit() {
    this.fsdBatchScheduling.getAllFsdSchedulingData()
    .subscribe(
      (response:any)=>{
        this.fsdData=response.result;
        this.showSpinner=false;
        console.log(response);
      },
      error=>{
        console.log("some error ocured");
      }
    )
  }



}
