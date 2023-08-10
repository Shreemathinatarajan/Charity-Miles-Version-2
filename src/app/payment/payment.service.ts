import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdmineventService } from '../Adminevent/adminevent.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private http:HttpClient,private adminevent:AdmineventService,private route:Router) { }

success(){
  alert("Payment Successfull");
  this.route.navigate(['rating']);
  
}
getpayment(){
  return this.http.get(environment.payment);
}

}
