import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constant/data.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Http:HttpClient,private constants:Constants) { }

  signIn(data){
    return this.Http.post(this.constants.AUTHENTICATE_LOGIN,data)
  }
}
