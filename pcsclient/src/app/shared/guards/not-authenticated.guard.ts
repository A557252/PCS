import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { TokenmanagemnetService } from '../services/tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate  {

  constructor(private tokenManagement:TokenmanagemnetService,private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(this.tokenManagement.isLoggedIn()){
      this.router.navigate(['/dashboard']);
      return false;
    }else{
      return true;
    }

  }
}
