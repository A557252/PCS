import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {CanActivate} from '@angular/router';
import { TokenmanagemnetService } from '../services/tokenmanagemnet.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {

  constructor(private tokenManagement:TokenmanagemnetService,private router:Router,private authenticationService:AuthenticationService){}
  
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    return new Observable<boolean>((observer) => {
      this.tokenManagement.isLoggedIn()
      .subscribe(
        (response:any)=>{
            if(response.status==200){
            observer.next(true);
          }
          },
        error=>{
          this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
          observer.next(false);
        }
      );
    });

  }
}

