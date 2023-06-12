import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  isLoggedIn:boolean=false;
  userName:string="";
  password:string="";

constructor(private client:HttpClient) { }
authUser(user: any){
  let UserArray= [user];
  if(localStorage.getItem('Users')){
    UserArray=JSON.parse(localStorage.getItem('Users') as string);
  }
  return UserArray.find(p => p.userName === user.userName && p.password === user.password);
}
login(username:string,password:string){
  this.userName=username;
  this.password=password;
  this.isLoggedIn=true;
  return of(this.isLoggedIn);
}
isUserLoggedIn():boolean{
  return this.isLoggedIn;
}
}

