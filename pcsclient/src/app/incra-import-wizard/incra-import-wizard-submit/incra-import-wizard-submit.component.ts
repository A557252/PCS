import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { IncraImportService } from 'src/app/shared/services/incra-import.service';
import { HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-incra-import-wizard-submit',
  templateUrl: './incra-import-wizard-submit.component.html',
  styleUrls: ['./incra-import-wizard-submit.component.scss']
})
export class IncraImportWizardSubmitComponent implements OnInit {

  public incraForm: FormGroup;
  @Input('data') completeData:any;
  @Input('fileName') FileName:string;
  @Input('schedulename') schedulename;
  @Input('idResponse') idResponse:string;
  @Input('parameterGot') parameterGot;
  @Input('job') job;

  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  showOtherPartOfForm:boolean=false;
  scheduleTime:string;
  msg:string="File will be imported by Batch, see batch shceduling click ok to continue";

  progress :{percentage:number}={percentage:0};

  constructor(private fb: FormBuilder, public dialog: MatDialog,private incraImport:IncraImportService,private datePipe:DatePipe,
    private router:Router
    ) {
  }

  ngOnInit() {
    this.scheduleTime=this.datePipe.transform(new Date(),'dd-MM-yy h:mm');
    console.log(this.completeData);
    this.incraForm = this.fb.group({
      job: this.job,
      schedule: this.schedulename,
      parameters: this.parameterGot,
      remarks:'',
      scheduleDate: this.scheduleTime,
      startDate:'',
      endDate:''
    });
  }
  onClicked(value: string) {
    this.openDialog(this.msg,0);
  }
  openDialog(msd,d:number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: {
        message:msd
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(d==1){
      }
    });
  }

  upload(){
    this.progress.percentage=0;
    this.incraImport.doIncraImport(this.FileName,this.incraForm.value,this.idResponse,this.schedulename,this.parameterGot).subscribe(
      (event)=>{
        if(event.type===HttpEventType.UploadProgress){
          this.progress.percentage=Math.round(100*event.loaded/event.total);
          if(this.progress.percentage==100){
            this.openDialog(this.msg,0);
            console.log("file uploaded successfully");
          }
        }else if(event instanceof HttpResponse){
          this.updatedFileSuccess=true;
          this.updatedFileFailure=false;
        }else{
          this.updatedFileFailure=true;
          this.updatedFileSuccess=false;
        }
      });
  }

  deleteIncra(){
    this.incraImport.cancelIncra(this.FileName,this.idResponse).subscribe(
      (res:any)=>{
              this.incraForm.reset();
              this.openDialog("incra import operation canceled",1);
      }
    )
  }



}