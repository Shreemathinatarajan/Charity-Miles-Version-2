import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdmineventService } from '../Adminevent/adminevent.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private http:HttpClient,private adminevent:AdmineventService) { }

success(){
  alert("Payment Successfull");
}
getpayment(){
  return this.http.get("http://localhost:3000/payment");
}

}
