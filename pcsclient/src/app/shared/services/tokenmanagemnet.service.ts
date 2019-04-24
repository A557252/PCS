import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenmanagemnetService {

  constructor(private httpClient:HttpClient) { }

  setToken(token){
    localStorage.setItem('authtoken',token);
  }

  getToken(){
    return localStorage.getItem('authtoken');
  }

  isLoggedInLocally(){
    if(localStorage.getItem('authtoken'))
    return true;
    else
    return false;
  }

  isLoggedIn(){
    let token=this.getToken();
    const header=new HttpHeaders({
    'Authorization':"Bearer "+token
  })
    return this.httpClient.get("http://localhost:9000/user/checklogin",{headers:header});
  }

  logoutUser(){
    localStorage.clear();
  }
}
