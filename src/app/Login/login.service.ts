import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn:boolean;
  private uname:string="";
  private pass:string="";
 
constructor(private route:Router) {
  this.isLoggedIn=false;
 
}
login(username:string,password:string){
  this.uname=username;
  this.pass=password;
  this.isLoggedIn=true;
  return of(this.isLoggedIn);
}

success(){}
onLogin(){
  this.isLoggedIn=true;
}
onLogout(){
  this.isLoggedIn=false;
  this.route.navigate(['/Home']);
}
isUserLoggedIn():boolean{
  return this.isLoggedIn;
}
/*logoutUser():void{
  this.isLoggedIn=false;
  this.route.navigate(['/Home']);
}*/
}
