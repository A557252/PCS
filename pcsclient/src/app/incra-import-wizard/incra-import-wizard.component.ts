import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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
  fileName:String="";


  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  showOtherPartOfForm:boolean=false;

  completeParameters:string="";
  fileType:string;
  parameterGot:string;
  
  progress :{percentage:number}={percentage:0};

  @ViewChild('fileData') file:ElementRef;


  public incraForm: FormGroup;
  constructor(fb: FormBuilder,private incraImport:IncraImportService,private router:Router) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: 'INCRA CONT/DATED FOR PCS',
      group: 'INCRA IMPORT'
    });
    this.currentDate=new Date();
  }

  onFileChange(event) {
    this.selectedFiles=event.target.files;
    this.fileName=this.selectedFiles.item(0).name;
  }

  deleteIncra(){
  this.file.nativeElement.value=null;
  }

  getParameters(){
    this.currentFileUpload=this.selectedFiles.item(0);
    console.log(this.currentFileUpload)
    this.incraImport.getParameter(this.currentFileUpload).subscribe(
      (response:any)=>{
        this.parameterGot=response.result.parameter;
        this.idResponse=response.result.id;
        console.log(response);
        console.log(this.parameterGot);
        this.fileType=response.result.fileType;
        this.showOtherPartOfForm=true;
        if(this.fileType=="C"){
          this.scheduleName=this.CONTINUOUS_SCHEDULE_NAME;
        }else{
         this.scheduleName=this.DATED_SCHEDULE_NAME;
        }
      }
    )

  }
}
