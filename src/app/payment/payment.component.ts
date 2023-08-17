import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdmineventService } from '../Adminevent/adminevent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  Name:any;
  Mobile:any;
  paymentdate:Date=new Date();
  payment:FormGroup|any;
  pay:any;


  constructor(private route:Router,private http:HttpClient,private paymentservice:PaymentService,private adminevent:AdmineventService) { }
  
  ngOnInit() {
    if(localStorage.getItem('user')){
      let un = localStorage.getItem('user');
      let ud = un && JSON.parse(un);
      this.Name=ud.uname;
      this.Mobile=ud.mobileno;
   };   
    this.payment = new FormGroup({
      'Name':new FormControl(),
      'Mobile':new FormControl(),
      'Paydate':new FormControl(),
      'Rs':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2,10}$")]),
      'uname':new FormControl("",[Validators.required,Validators.pattern("[A-Z ]{3,20}$")]),
      'cardno':new FormControl("",[Validators.required,Validators.pattern("[0-9]{16}$")]),
      'exp':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}/[0-9]{4}$")]),
      'cvv':new FormControl("",[Validators.required,Validators.pattern("[0-9]{3}")]),
    })
}
  paymentdata(payment:FormGroup){

    this.http.post<any>(environment.payment,this.payment.value)
    .subscribe(res=>{
      this.paymentservice.success();
      this.payment.reset();
      this.route.navigate(['/rating']);
    },err=>{
      alert('Something went wrong');
    });


    
  }
  
}
