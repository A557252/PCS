import { Component, OnInit, ViewChild } from '@angular/core';
import { PcsSchedulingServicesService } from '../../services/pcs-scheduling-services.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pcs-batch-scheduling',
  templateUrl: './pcs-batch-scheduling.component.html',
  styleUrls: ['./pcs-batch-scheduling.component.scss']
})
export class PcsBatchSchedulingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;    

  displayedColumns: string[] = ['Jobs', 'Schedule Date', 'Start Date', 'End Date','Parameters','Remark'];
  dataSource = new MatTableDataSource();



  pcsData;
  showSpinner:boolean=true;
  constructor(private pcsBatchScheduling:PcsSchedulingServicesService) { }

  ngOnInit() {
      
  }



}
