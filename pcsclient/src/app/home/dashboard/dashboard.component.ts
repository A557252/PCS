import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  selectedFiles:FileList;
  currentFileUpload:File;
  updatedFileSuccess:boolean=false;
  updatedFileFailure:boolean=false;
  progress :{percentage:number}={percentage:0};
  constructor(private router:Router,private tokenService:TokenmanagemnetService) { }

  ngOnInit() {
  }

  gotoLogout(){
    this.tokenService.logoutUser();
    this.router.navigate(['/login']);
  }

  selecteFile(event){
    this.selectedFiles=event.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
    }
  }
}
