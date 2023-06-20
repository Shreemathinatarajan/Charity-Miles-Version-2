import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MembershipService } from '../membership.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platinumpayment',
  templateUrl: './platinumpayment.component.html',
  styleUrls: ['./platinumpayment.component.css']
})
export class PlatinumpaymentComponent implements OnInit {

  platinumpayment:FormGroup|any;
  pmember:any;
  user:any;

  constructor(private http:HttpClient,private service:MembershipService,private route:Router) { 
    this.http.get<any>("http://localhost:3000/platinum")
    .subscribe(res=>{
      this.pmember=res;
    }),
    this.http.get<any>("http://localhost:3000/loginuser")
    .subscribe(res=>{
      this.user=res;
    })
  }

  ngOnInit() {
    this.platinumpayment = new FormGroup({
      'Rs':new FormControl("",[Validators.required,Validators.pattern("[9][9][9]$")]),
      'uname':new FormControl("",[Validators.required,Validators.pattern("[A-Z ]{3,20}$")]),
      'cardno':new FormControl("",[Validators.required,Validators.pattern("[0-9]{16}$")]),
      'exp':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}/[0-9]{4}$")]),
      'cvv':new FormControl("",[Validators.required,Validators.pattern("[0-9]{3}")]),
    })
  }
  paymentdata(payment:FormGroup){

    this.http.post<any>("http://localhost:3000/Platinummember",this.platinumpayment.value)
    .subscribe(res=>{
      this.service.success();
      this.platinumpayment.reset();
      this.route.navigate(['/Membership']);
    },err=>{
      alert('Something went wrong');
    })
  }
}
