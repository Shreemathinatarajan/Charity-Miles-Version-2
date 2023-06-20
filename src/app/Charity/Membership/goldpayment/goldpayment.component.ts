import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MembershipService } from '../membership.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goldpayment',
  templateUrl: './goldpayment.component.html',
  styleUrls: ['./goldpayment.component.css']
})
export class GoldpaymentComponent implements OnInit {

  goldpayment:FormGroup|any;
  gmember:any;

  constructor(private http:HttpClient,private service:MembershipService,private route:Router) { 
    this.http.get<any>("http://localhost:3000/gold")
    .subscribe(res=>{
      this.gmember=res;
    })
  }

  ngOnInit() {
    this.goldpayment = new FormGroup({
      'Rs':new FormControl("",[Validators.required,Validators.pattern("[6][9][9]$")]),
      'uname':new FormControl("",[Validators.required,Validators.pattern("[A-Z ]{3,20}$")]),
      'cardno':new FormControl("",[Validators.required,Validators.pattern("[0-9]{16}$")]),
      'exp':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}/[0-9]{4}$")]),
      'cvv':new FormControl("",[Validators.required,Validators.pattern("[0-9]{3}")]),
    })
  }
  paymentdata(payment:FormGroup){

    this.http.post<any>("http://localhost:3000/goldmember",this.goldpayment.value)
    .subscribe(res=>{
      this.service.success();
      this.goldpayment.reset();
      this.route.navigate(['/Membership']);
    },err=>{
      alert('Something went wrong');
    })
  }

}
