import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Login/login.service';
import { member } from 'src/app/member.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-Membershippayment',
  templateUrl: './Membershippayment.component.html',
  styleUrls: ['./Membershippayment.component.css']
})
export class MembershippaymentComponent implements OnInit {
  username:any;
  status:boolean=true;
  role:any;
  today:any;
  toggleCase(){
    this.status=!this.status
  }
  constructor(private service:MembershipService,private http:HttpClient,private route:Router) { }

  discount:member={
    discountPrice:849,
    golddiscountPrice:594,
    silverdiscountPrice:339
  };
  offerend:any;
  timeLeft:any;
  timer:any;
  demo:any;
  ngOnInit(): void {
    this.startTimer();
  }
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
  
  todaydate=new Date();

}
