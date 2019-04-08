import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private tokenService:TokenmanagemnetService) { }

  ngOnInit() {
  }

  gotoLogout(){
    this.tokenService.logoutUser();
    this.router.navigate(['/login']);
  }

}
