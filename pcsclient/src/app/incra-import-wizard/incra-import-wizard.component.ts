import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IncraImportService } from '../shared/services/incra-import.service';
import { HttpEventType, HttpResponse, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-incra-import-wizard',
  templateUrl: './incra-import-wizard.component.html',
  styleUrls: ['./incra-import-wizard.component.scss']
})
export class IncraImportWizardComponent {

  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  progress :{percentage:number}={percentage:0};

  public incraForm: FormGroup;

  constructor(fb: FormBuilder,private incraImport:IncraImportService) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: '',
      group: '',
    });
  }

  onFileChange(event) {
    this.selectedFiles=event.target.files;
  }

  upload(){
    this.progress.percentage=0;
    
    this.currentFileUpload=this.selectedFiles.item(0);
    this.incraImport.doIncraImport(this.currentFileUpload).subscribe(
      (event:any)=>{
        if(event.type===HttpEventType.UploadProgress){
          this.progress.percentage=Math.round(100*event.loaded/event.total);
        }else if(event instanceof HttpResponse){
          console.log("file is completely uploaded");
          this.updatedFileSuccess=true;
          this.updatedFileFailure=false;
        }else{
          this.updatedFileFailure=true;
          this.updatedFileSuccess=false;
        }
      })
  }
}
