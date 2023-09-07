import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) { }
private registeruser:string[]=[];
success(uname:string):boolean{
  if(this.registeruser.includes(uname)){
    alert("Already Registered");
    return false;
  }
  this.registeruser.push(uname);
  alert("Registered Successfully");
  return true;
}
getuser(){
  return this.http.get(environment.registeruser);
}
}
