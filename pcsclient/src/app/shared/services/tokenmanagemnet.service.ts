import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenmanagemnetService {

  constructor() { }

  setToken(token){
    localStorage.setItem('authtoken',token);
  }

  getToken(){
    return localStorage.getItem('authtoken');
  }

  isLoggedIn(){
    if(localStorage.getItem('authtoken'))
    return true;
    else
    return false;
  }
}
