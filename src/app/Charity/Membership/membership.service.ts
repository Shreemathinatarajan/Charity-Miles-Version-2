import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

constructor(private http:HttpClient) { }
success(){
  alert("Thank you for joining as a member in charity miles Welcome.......");
}
getplatinum(){
  return this.http.get(environment.platinum);
}
getplatinummember(){
  return this.http.get(environment.platinummember);
}


}
