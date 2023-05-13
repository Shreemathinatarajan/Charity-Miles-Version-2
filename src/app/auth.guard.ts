import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginformService } from './loginform.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:LoginformService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(!this.service.isUserLoggedIn()){
        alert("Please Login to view the page");
        this.router.navigate(["Login"],{queryParams:{retUrl:route.url}});
        return false;
      }
    return true;
  }
  
}
