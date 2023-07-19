import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Login/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice:LoginService,private router:Router,private http:HttpClient){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
     
     if(!this.loginservice.isUserLoggedIn()){
        alert("Please Login to view the page");
        //this.router.navigate(["Login"],{queryParams:{returl:route.url}});
        return false;
      }
      return true;
     
  }
 
    
}
