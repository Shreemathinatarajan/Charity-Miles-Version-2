import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) { }
success(){
  alert("Registered Successfully");
}
getuser(){
  return this.http.get(environment.registeruser);
}
}
