import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IncraImportService } from '../shared/services/incra-import.service';
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
  fileName:String="SELECT FILE";
  errorFileUpload:boolean=false;
  importDisabled:boolean=true;

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
    if(this.fileName.split(".")[1]!="dat"){
      this.errorFileUpload=true;
      this.importDisabled=true;
    }else{
      this.importDisabled=false;
      this.errorFileUpload=false;
    }
  }

  deleteIncra(){
  this.file.nativeElement.value=null;
  this.fileName="SELECT FILE";
  this.errorFileUpload=false;
  }

  getParameters(){
    this.currentFileUpload=this.selectedFiles.item(0);
    this.incraImport.getParameter(this.currentFileUpload).subscribe(
      (response:any)=>{
        this.parameterGot=response.result.parameter;
        this.idResponse=response.result.id;
        
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

  incraImportForm(event){
    this.showOtherPartOfForm=false;
  }
}
