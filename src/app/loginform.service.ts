import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginformService {

isLoggedIn : boolean=false;
  username:string="";
  password:string="";
  constructor(private router:Router) { }
  login(username:string,password:string){
    this.username=username;
    this.password=password;
    this.isLoggedIn=true;
    return of(this.isLoggedIn);
  }
  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }
  logout(){
    localStorage.clear();
  }

}
