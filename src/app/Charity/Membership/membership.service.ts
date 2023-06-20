import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

constructor(private http:HttpClient) { }
success(){
  alert("Thank you for joining as a member in charity miles Welcome.......");
}
getplatinum(){
  return this.http.get("http://localhost:3000/platinum");
}

}
