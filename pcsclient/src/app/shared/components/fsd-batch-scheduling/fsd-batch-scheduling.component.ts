import { Component, OnInit } from '@angular/core';
import { FsdSchedulingServicesService } from '../../services/fsd-scheduling-services.service';

@Component({
  selector: 'app-fsd-batch-scheduling',
  templateUrl: './fsd-batch-scheduling.component.html',
  styleUrls: ['./fsd-batch-scheduling.component.scss']
})
export class FsdBatchSchedulingComponent implements OnInit {

  fsdDataTotal;
  showSpinner:boolean=true;
  // totalCount:number;
  pages:number;
  initial:number=1;
  nextCount:number=10;
  final:number;
  limit:number=10;
  disablePrev:boolean;
  disableNext:boolean;
  currentPage:number=1;

  constructor(private fsdBatchScheduling:FsdSchedulingServicesService) { }

  ngOnInit() {
    //total count
    this.fsdBatchScheduling.getFsdRowCount()
    .subscribe(
      (response:any)=>{
        // this.totalCount=response.result-0;
        this.final=response.result-0;
        this.pages=Math.floor(this.final/10);
      }
    );
    this.fetch(this.initial,this.limit);
    this.checkDisability();
  }

  nextFetch(){
    this.initial=this.nextCount+1;
    this.nextCount=this.nextCount+this.limit;
    this.currentPage+=1;
    this.fetch(this.initial,this.nextCount);
    this.checkDisability();
  }

  previousFetch(){
    this.initial=this.initial-this.limit;
    this.nextCount=this.nextCount-this.limit;
    this.currentPage-=1;
    this.fetch(this.initial,this.nextCount);
    this.checkDisability();
  }

  fetch(from:number,to:number){
    this.fsdBatchScheduling.getAllFsdSchedulingData(from,to)
    .subscribe(
      (response:any)=>{
        this.fsdDataTotal=response.result;
        this.showSpinner=false;
      },
      error=>{
        console.log("some error ocured");
      }
    )
  }

  checkDisability(){
    if(this.initial<=1)
      this.disablePrev=true;
    else{
        this.disablePrev=false;
      }
    if(this.nextCount+this.limit>=this.final)
      this.disableNext=true;
      else{
        this.disableNext=false;
      }
  }
}
