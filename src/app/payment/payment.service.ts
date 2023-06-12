import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private client:HttpClient) { }
PaymentInfo(body:any){
  return this.client.post("http://localhost:3000/payment",body);
}

}
