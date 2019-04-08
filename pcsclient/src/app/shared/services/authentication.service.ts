import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private Http:HttpClient) { }

  signIn(data){
    return this.Http.post("http://localhost:9000/auth/signin",data);
  }
}
