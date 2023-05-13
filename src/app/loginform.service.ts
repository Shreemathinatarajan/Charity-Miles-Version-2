import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginformService {

isLoggedIn : boolean=false;
  username:string="";
  password:string="";
  constructor() { }
  login(username:string,password:string){
    this.username=username;
    this.password=password;
    this.isLoggedIn=true;
    return of(this.isLoggedIn);
  }
  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }

}
