import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-incra-import-wizard-submit',
  templateUrl: './incra-import-wizard-submit.component.html',
  styleUrls: ['./incra-import-wizard-submit.component.scss']
})
export class IncraImportWizardSubmitComponent implements OnInit {

  public incraForm: FormGroup;

  constructor(fb: FormBuilder, public dialog: MatDialog) {
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
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: {message:'File will be imported by Batch, see batch shceduling click ok to continue'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      debugger
    });
  }
}