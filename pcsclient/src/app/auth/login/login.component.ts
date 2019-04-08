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
  loggedInFail:boolean;
  loggedInTrue:boolean;
  constructor(private authenticationService:AuthenticationService,private tokenManagement:TokenmanagemnetService,private router:Router) { }
  
  ngOnInit() {
  }

  submitLoginForm(loginForm:NgForm){
    this.authenticationService.signIn(loginForm.value)
    .subscribe(
      (response:any)=>{
        this.tokenManagement.setToken(response.result.token);
        console.log(response);
        this.router.navigate(['dashboard']);
      },
      error=>{
        console.log("logged in failed"+error)
        this.loggedInFail=true;
      }
    );
  }

}
