import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagementServiceMock {

  constructor() { }

  isLoggedInLocally(){
        return true;
  }
}
