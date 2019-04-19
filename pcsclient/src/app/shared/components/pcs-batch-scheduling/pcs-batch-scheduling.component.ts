import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PcsSchedulingServicesService } from '../../services/pcs-scheduling-services.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-pcs-batch-scheduling',
  templateUrl: './pcs-batch-scheduling.component.html',
  styleUrls: ['./pcs-batch-scheduling.component.scss']
})
export class PcsBatchSchedulingComponent implements OnInit {

  pcsDataTotal;
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
  pcsHeaderList=["Jobs", "Schedule Date", "Start Date", "End Date", "Parameters","Remarks"];

  @ViewChild('goto') goto:ElementRef;

  constructor(private pcsBatchScheduling:PcsSchedulingServicesService,public dialog: MatDialog) { }

  ngOnInit() {
    //total count
    this.pcsBatchScheduling.getPcsRowCount()
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
    this.showSpinner=true;
    this.initial=this.nextCount+1;
    this.nextCount=this.nextCount+this.limit;
    this.currentPage+=1;
    this.fetch(this.initial,this.nextCount);
    this.checkDisability();
  }

  previousFetch(){
    this.showSpinner=true;
    this.initial=this.initial-this.limit;
    this.nextCount=this.nextCount-this.limit;
    this.currentPage-=1;
    this.fetch(this.initial,this.nextCount);
    this.checkDisability();
  }

  fetch(from:number,to:number){
    this.pcsBatchScheduling.getAllPcsSchedulingData(from,to)
    .subscribe(
      (response:any)=>{
        this.pcsDataTotal=response.result;
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
