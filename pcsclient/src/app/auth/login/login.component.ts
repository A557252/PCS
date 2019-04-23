import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenmanagemnetService } from 'src/app/shared/services/tokenmanagemnet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  environmentValue:string="Production";
  loggedInFail:boolean;
  loggedInTrue:boolean;
  returnUrl:string;

  constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService,private tokenManagement:TokenmanagemnetService,private router:Router) { }
  
  ngOnInit() {
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/dashboard/wizards/incrawizard';
  }

  submitLoginForm(loginFormData){   
    if(this.signInLogin(loginFormData)){
      this.loggedInTrue=true;
    }
    else{
    }
  }

  signInLogin(loginFormData):boolean{
    let result:boolean;
    this.authenticationService.signIn(loginFormData)
    .subscribe(
      (response:any)=>{
          if(response.status=='200'){
          this.tokenManagement.setToken(response.result.token);
          this.router.navigateByUrl(this.returnUrl);
          result=true;
        }else{
          this.loggedInFail=true;
          result=false;
        }
        },
      error=>{
        console.log("error returned");
        this.loggedInFail=true;
        result=false;
      }
    );
      return result;
  }

}
