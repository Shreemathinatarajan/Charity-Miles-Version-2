import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MembershipService } from '../membership.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silverpayment',
  templateUrl: './silverpayment.component.html',
  styleUrls: ['./silverpayment.component.css']
})
export class SilverpaymentComponent implements OnInit {

  silverpayment:FormGroup|any;
  pmember:any;

  constructor(private http:HttpClient,private service:MembershipService,private route:Router) { 
    this.http.get<any>("http://localhost:3000/silver")
    .subscribe(res=>{
      this.pmember=res;
    })
  }

  ngOnInit() {
    this.silverpayment = new FormGroup({
      'Rs':new FormControl("",[Validators.required,Validators.pattern("[3][9][9]$")]),
      'uname':new FormControl("",[Validators.required,Validators.pattern("[A-Z ]{3,20}$")]),
      'cardno':new FormControl("",[Validators.required,Validators.pattern("[0-9]{16}$")]),
      'exp':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}/[0-9]{4}$")]),
      'cvv':new FormControl("",[Validators.required,Validators.pattern("[0-9]{3}")]),
    })
  }
  paymentdata(payment:FormGroup){

    this.http.post<any>("http://localhost:3000/silvermember",this.silverpayment.value)
    .subscribe(res=>{
      this.service.success();
      this.silverpayment.reset();
      this.route.navigate(['/Membership']);
    },err=>{
      alert('Something went wrong');
    })
  }

}
