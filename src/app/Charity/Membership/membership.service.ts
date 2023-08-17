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
}
getplatinum(){
  return this.http.get(environment.platinum);
}
getplatinummember(){
  return this.http.get(environment.platinummember);
}
postplatinummembership(body:any){
  return this.http.post(environment.platinummember,body);
}
postgoldmembership(body:any){
  return this.http.post(environment.goldmember,body);
}
postsilvermembership(body:any){
  return this.http.post(environment.silvermember,body);
}
updatemembership(info:any,id:any){
  return this.http.patch('$(environment.registeruser)${id}',info);
}

}
