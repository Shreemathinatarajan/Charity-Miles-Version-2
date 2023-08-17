import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:3000';


constructor(private http:HttpClient) { }
getUser(userId:number):Observable<any>{
  return this.http.get('${this.base}/registereduser/${userId}');
}

}
