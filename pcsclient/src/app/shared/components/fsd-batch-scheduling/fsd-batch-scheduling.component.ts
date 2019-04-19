import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FsdSchedulingServicesService } from '../../services/fsd-scheduling-services.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

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
  fsdHeaderList = ["Job", "Schedule Date", "Start Date", "End Date", "Parameters","Remarks"];
  @ViewChild('goto') goto:ElementRef;

  constructor(private fsdBatchScheduling:FsdSchedulingServicesService,public dialog: MatDialog) { }

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
    console.log(this.fsdDataTotal);
    
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
        const temp_obj = {
          name: 'abc',
          start_date: 'start',
          end_date: 'end',
          parameters: 'parameters',
          remarks: 'remarks'
        }
        this.fsdDataTotal = [];
        let i = 0;
        while(i<50) {
          this.fsdDataTotal.push(temp_obj);
          i++;
        }
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

  openDialog(msd): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: {
        message:msd
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  directlyPage(){
    if(this.goto.nativeElement.value > this.pages || this.goto.nativeElement.value<1){
      this.goto.nativeElement.value="";
      this.openDialog("please select page within range of 1 to "+this.pages);
    }else{
    this.currentPage=this.goto.nativeElement.value;
    this.initial=this.currentPage*this.limit;
    this.nextCount=this.initial+this.limit;
    this.goto.nativeElement.value="";
    this.fetch(this.initial,this.nextCount);
    }
  }
}
