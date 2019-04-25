import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from '../../constant/data.constant';

@Injectable({
  providedIn: 'root'
})
export class TokenmanagemnetService {

  constructor(private httpClient:HttpClient,private constants:Constants) { }

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
    return this.httpClient.get(this.constants.CHECK_LOGIN,{headers:header});
  }

  logoutUser(){
    localStorage.clear();
  }
}
