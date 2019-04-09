import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Http:HttpClient,private tokenManagement:TokenmanagemnetService) { }

  signIn(data){
    this.Http.post("http://localhost:9000/auth/signin",data)
    .subscribe(
      (response:any)=>{
        this.tokenManagement.setToken(response.result.token);
        return true;
      },
      error=>{
        return false;
      }
    );
    return false;
  }
}
