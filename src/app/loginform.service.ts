import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginformService {

isLoggedIn : boolean=false;
  username:string="";
  password:string="";
  constructor(){ }
  login(username:string,password:string){
    this.username=username;
    this.password=password;
    this.isLoggedIn=true;
    return of(this.isLoggedIn);
  }
  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }
  isAdminUser():boolean{
   console.log("un"+this.username)
   if(this.username=="admin" && this.password=="Admin@123")
   {
    return true;
   }
   else{
    return false;
   }
  }
  LogoutUser():void{
    this.isLoggedIn=false;
  }
}
