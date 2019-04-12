import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-incra-import-wizard-submit',
  templateUrl: './incra-import-wizard-submit.component.html',
  styleUrls: ['./incra-import-wizard-submit.component.scss']
})
export class IncraImportWizardSubmitComponent implements OnInit {
  
  public incraForm: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.incraForm = fb.group({
      incraFile: null,
      scheduleName: '',
      group: '',
    });
  }

  ngOnInit() {
  }
  onClicked(value: string) {
    debugger
    console.log(value);
  }
}
