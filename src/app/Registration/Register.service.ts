import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) { }
success(){
  alert("Registered Successfully");
}
getuser(){
  return this.http.get("http://localhost:3000/registereduser");
}
}
