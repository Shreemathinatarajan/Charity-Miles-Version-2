import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Adminpayment',
  templateUrl: './Adminpayment.component.html',
  styleUrls: ['./Adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {
  payment:any;
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/payment").subscribe(res=>{
      this.payment=res;
    })
   }

  ngOnInit() {
  }

}
