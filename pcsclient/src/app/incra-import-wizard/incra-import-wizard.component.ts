import { Component } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { IncraImportService } from '../shared/services/incra-import.service';
import { HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
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
  scheduleName:string;
  formSubmitted:boolean=false;
  idResponse:string="";


  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  showOtherPartOfForm:boolean=false;

  completeParameters:string="";
  fileType:string;
  parameterGot:string;
  
  progress :{percentage:number}={percentage:0};

  public incraForm: FormGroup;
  constructor(fb: FormBuilder,private incraImport:IncraImportService,private router:Router) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: 'INCRA CONT/DATED FOR PCS',
      group: 'INCRA IMPORT',
      job:this.JOB,
      parameter:this.parameterGot,
      remarks:'',
      scheduleDate:''
    });
    this.currentDate=new Date();
  }

  onFileChange(event) {
    this.selectedFiles=event.target.files;
    // this.currentFileUpload=this.selectedFiles.item(0);
    // console.log(this.currentFileUpload)
    // this.incraImport.getParameter(this.currentFileUpload).subscribe(
    //   (response:any)=>{
    //     this.parameterGot=response.result.parameter;
    //     console.log(response);
    //     console.log(this.parameterGot);
    //     this.fileType=response.result.fileType;
    //     if(this.fileType=="C"){
    //       this.scheduleName=this.CONTINUOUS_SCHEDULE_NAME;
    //     }else{
    //      this.scheduleName=this.DATED_SCHEDULE_NAME;
    //     }
    //   }
    // )
  }

  getParameters(){
    this.showOtherPartOfForm=true;

    this.currentFileUpload=this.selectedFiles.item(0);
    console.log(this.currentFileUpload)
    this.incraImport.getParameter(this.currentFileUpload).subscribe(
      (response:any)=>{
        this.parameterGot=response.result.parameter;
        this.idResponse=response.result.id;
        console.log(response);
        console.log(this.parameterGot);
        this.fileType=response.result.fileType;
        if(this.fileType=="C"){
          this.scheduleName=this.CONTINUOUS_SCHEDULE_NAME;
        }else{
         this.scheduleName=this.DATED_SCHEDULE_NAME;
        }
      }
    )

  }

  submitConfirmationForm(){
    console.log(this.incraForm.value);
  }

  upload(){
    this.formSubmitted=true;
    this.progress.percentage=0;
    this.currentFileUpload=this.selectedFiles.item(0);
    this.incraImport.doIncraImport(this.currentFileUpload,this.incraForm.value,this.idResponse).subscribe(
      (event)=>{
        if(event.type===HttpEventType.UploadProgress){
          this.progress.percentage=Math.round(100*event.loaded/event.total);
          if(this.progress.percentage==100){
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
}
