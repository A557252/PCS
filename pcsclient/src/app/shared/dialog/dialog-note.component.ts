import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    message: string;
}

@Component({
    selector: 'app-dialog-note',
    templateUrl: 'dialog-note.component.html',
    styleUrls:['dialog.component.css']
})
export class DialogNoteComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { dialogRef.disableClose = true; }

    onNoClick(): void {
        this.dialogRef.close();
    }

}