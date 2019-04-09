import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  environmentValue:string="Production";
  loggedInFail:boolean=false;
  loggedInTrue:boolean=false;
  constructor(private authenticationService:AuthenticationService,private tokenManagement:TokenmanagemnetService,private router:Router) { }
  
  ngOnInit() {
  }

  submitLoginForm(loginFormData){
    console.log(loginFormData)
    let res=this.authenticationService.signIn(loginFormData);
    if(res){
      this.router.navigate(['dashboard']);
      this.loggedInTrue=true;
    }
    else{
      this.loggedInFail=true;
    }
  }

}
