import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CanActivate} from '@angular/router';
import { TokenmanagemnetService } from '../services/tokenmanagemnet.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {

  constructor(private tokenManagement:TokenmanagemnetService,private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(this.tokenManagement.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }

  }
}

