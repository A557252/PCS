import { Component } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { IncraImportService } from '../shared/services/incra-import.service';
import { HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-incra-import-wizard',
  templateUrl: './incra-import-wizard.component.html',
  styleUrls: ['./incra-import-wizard.component.scss']
})
export class IncraImportWizardComponent {

  JOB:string='FSD_INCRA_IMPORT.IMPORT';
  CONTINUOUS_SCHEDULE_NAME:string='INCRA CONTINUOUS FOR PCS';
  DATED_SCHEDULE_NAME:string='INCRA DATED FOR PCS';
  currentDate:Date;
  scheduleNames:string;

  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  showOtherPartOfForm:boolean=false;

  completeParameters:string="";
  fileType:string;
  parameterGot:string;
  
  progress :{percentage:number}={percentage:0};

  confirmationForm:FormGroup;

  public incraForm: FormGroup;
  constructor(fb: FormBuilder,private incraImport:IncraImportService) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: 'INCRA CONT/DATED FOR PCS',
      group: 'INCRA IMPORT',
    });
    this.confirmationForm=new FormGroup({
      'incraFile':new FormControl(' '),
      'job':new FormControl(' '),
      'schedule':new FormControl(' '),
      'parameter':new FormControl(' '),
      'remarks':new FormControl(''),
      'scheduleDate':new FormControl('')
    })

    this.currentDate=new Date();
  }

  onFileChange(event) {
    this.selectedFiles=event.target.files;
  }

  getParameters(){
    console.log(this.incraForm.value);
    this.currentFileUpload=this.selectedFiles.item(0);
    this.incraImport.getParameter(this.currentFileUpload).subscribe(
      (response:any)=>{
        this.parameterGot=response.result.parameter;
        this.fileType=response.result.fileType;
        if(this.fileType=="C"){
          this.scheduleNames=this.CONTINUOUS_SCHEDULE_NAME;
        }else{
         this.scheduleNames=this.DATED_SCHEDULE_NAME;
        }
        //setting the default value
        this.confirmationForm.setValue({
          'incraFile':'',
          'schedule':this.scheduleNames,
          'parameter':this.parameterGot,
          'job':this.JOB,
          'remarks':' ',
          'scheduleDate':formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')
        });
        this.showOtherPartOfForm=true;
      }
    )
  }

  submitConfirmationForm(){
    console.log(this.confirmationForm);
  }

  upload(){
    this.progress.percentage=0;
    this.currentFileUpload=this.selectedFiles.item(0);
    this.incraImport.doIncraImport(this.currentFileUpload).subscribe(
      (event)=>{
        if(event.type===HttpEventType.UploadProgress){
          this.progress.percentage=Math.round(100*event.loaded/event.total);
        }else if(event instanceof HttpResponse){
          this.updatedFileSuccess=true;
          this.updatedFileFailure=false;
        }else{
          this.updatedFileFailure=true;
          this.updatedFileSuccess=false;
        }
      })
  }
}
