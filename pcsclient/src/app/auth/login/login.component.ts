import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  environmentValue:string="Production";
  loggedInFail:boolean;
  loggedInTrue:boolean;
  constructor(private authenticationService:AuthenticationService,private tokenManagement:TokenmanagemnetService) {

   }
  
  ngOnInit() {
  }

  submitLoginForm(loginForm:NgForm){
    this.authenticationService.signIn(loginForm.value)
    .subscribe(
      (response:any)=>{
        this.tokenManagement.setToken(response.result.token);
      },
      error=>{
        console.log("logged in failed"+error)
        this.loggedInFail=true;
      }
    );
  }

}
