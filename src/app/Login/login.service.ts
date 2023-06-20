import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;
  uname:string="";
  pass:string="";
 
  
constructor(private route:Router) { 
 
}
/*authUser(user: any){
  let UserArray= [user];
  if(localStorage.getItem('Users')){
    UserArray=JSON.parse(localStorage.getItem('Users') as string);
  }
  return UserArray.find(p => p.userName === user.userName && p.password === user.password);
}*/
login(username:string,password:string){
  this.uname=username;
  this.pass=password;
  this.isLoggedIn=true;
  return of(this.isLoggedIn);
}
/*isUserLoggedIn():boolean{
  return this.isLoggedIn;
}*/

success(){
  
}
onLogin(){
  this.isLoggedIn=true;
}
onLogout(){
  this.isLoggedIn=false;
  this.route.navigate(['/Home']);
}
isUserLoggedIn(){
  return this.isLoggedIn;
}
}
