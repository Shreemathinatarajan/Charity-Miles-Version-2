import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormService {

constructor(private client:HttpClient) { }
Information(body:any){
  return this.client.post("http://localhost:3000/users",body);
}

}
