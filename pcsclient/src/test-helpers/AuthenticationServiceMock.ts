import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceMock {

  constructor() { }

  signIn(data:any){
    if(data.username=='pravesh' && data.password=='pravesh' && data.environment=='Acceptance')
        return true;
    else
        return false;
  }
}
