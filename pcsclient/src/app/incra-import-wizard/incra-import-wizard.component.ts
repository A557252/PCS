import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-incra-import-wizard',
  templateUrl: './incra-import-wizard.component.html',
  styleUrls: ['./incra-import-wizard.component.scss']
})
export class IncraImportWizardComponent {

  public incraForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: '',
      group: '',
    });
  }

  importIncra() {
    debugger
    console.log(this.incraForm.value);
  }
  onFileChange(event) {
    debugger
    if (event.target.files.length > 0) {
      this.incraForm.get('incraFile').setValue(event.target.files[0]);
    }
  }
}
