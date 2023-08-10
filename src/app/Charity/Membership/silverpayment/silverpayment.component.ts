import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MembershipService } from '../membership.service';
import { Router } from '@angular/router';
import { member } from 'src/app/member.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-silverpayment',
  templateUrl: './silverpayment.component.html',
  styleUrls: ['./silverpayment.component.css']
})
export class SilverpaymentComponent implements OnInit {

  discount:member={
    discountPrice:849,
    golddiscountPrice:594,
    silverdiscountPrice:339
  };

  silverpayment:FormGroup|any;
  silvermember:any;

  constructor(private http:HttpClient,private service:MembershipService,private route:Router) { 
    this.http.get<any>(environment.silver)
    .subscribe(res=>{
      this.silvermember=res;
    })
  }

  ngOnInit() {
    this.silverpayment = new FormGroup({
      'date':new FormControl("",[Validators.required]),
      'uname':new FormControl("",[Validators.required,Validators.pattern("[A-Z ]{3,20}$")]),
      'cardno':new FormControl("",[Validators.required,Validators.pattern("[0-9]{16}$")]),
      'exp':new FormControl("",[Validators.required,Validators.pattern("[0-9]{2}/[0-9]{4}$")]),
      'cvv':new FormControl("",[Validators.required,Validators.pattern("[0-9]{3}")]),
    }),
    this.startTimer();
  }
  paymentdata(payment:FormGroup){

    this.http.post<any>(environment.silvermember,this.silverpayment.value)
    .subscribe(res=>{
      this.service.success();
      this.silverpayment.reset();
      this.route.navigate(['/Membership']);
    },err=>{
      alert('Something went wrong');
    })
  }

  offerend:any;
  timeLeft:any;
  timer:any;
  demo:any;
  ngOnDestroy():void{
    this.clearTimer();
  }
  isOfferActive():boolean{
    return this.timeLeft>0;
  }
  private startTimer():void{
    const currentTime=new Date().getTime();
   this.offerend = new Date("August 10,2023 18:00:00").getTime();
    this.timer=setInterval(()=>{
      const now=new Date().getTime();
     this.timeLeft=this.offerend-now;
      var distance=this.timeLeft;
      var days = Math.floor(distance/(1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
      var seconds = Math.floor((distance % (1000*60))/1000);
      this.demo=days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";
      if(this.timeLeft===0){
        this.clearTimer();
        alert();
      }
    },1000);
  }
  private clearTimer():void{
    clearInterval(this.timer);
  }
  
  packageDuration: any; 
  endDate: any;

 
 registrationDate: Date = new Date(); 

  calculateEndDate(): Date {
    const numberOfDaysInPackage = 91; // Change this as needed
    const endDate = new Date(this.registrationDate);
    endDate.setDate(endDate.getDate() + numberOfDaysInPackage);
    return endDate;
  } 
}
