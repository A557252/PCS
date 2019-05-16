import { Component,  Input } from '@angular/core';
import { DialogNoteComponent } from '../../dialog/dialog-note.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headerList: [];
  @Input() rowList: any;
  @Input() title;

  constructor(public dialog: MatDialog) { 
  }

  openDialog(rowdata): void {
    const dialogRef = this.dialog.open(DialogNoteComponent, {
      data: {
        title:this.title,
        job:rowdata.name,
        scheduleDate:rowdata.scheduleDate,
        parameters:rowdata.parameters,
        remarks:rowdata.remarks,
        startDate:rowdata.startDate,
        endDate:rowdata.endDate
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogs(rowdata){
    this.openDialog(rowdata);
  }

}