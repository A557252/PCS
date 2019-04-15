import { Component, OnInit } from '@angular/core';
import { PcsSchedulingServicesService } from '../../services/pcs-scheduling-services.service';

@Component({
  selector: 'app-pcs-batch-scheduling',
  templateUrl: './pcs-batch-scheduling.component.html',
  styleUrls: ['./pcs-batch-scheduling.component.scss']
})
export class PcsBatchSchedulingComponent implements OnInit {

  pcsData;
  showSpinner:boolean=true;
  constructor(private pcsBatchScheduling:PcsSchedulingServicesService) { }

  ngOnInit() {
    this.pcsBatchScheduling.getAllPcsSchedulingData()
    .subscribe(
      (response:any)=>{
        this.pcsData=response.result;
        
        this.showSpinner=false;
        console.log(response);
      },
      error=>{
        console.log("some error ocured");
      }
    )
  }



}
