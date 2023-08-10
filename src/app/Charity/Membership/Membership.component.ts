import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { member } from 'src/app/member.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Membership',
  templateUrl: './Membership.component.html',
  styleUrls: ['./Membership.component.css']
})
export class MembershipComponent implements OnInit {
  discount:member={
    discountPrice:849,
    golddiscountPrice:594,
    silverdiscountPrice:339
  };
  
  pmember:any;
  gmember:any;
  smember:any;
  constructor(private http:HttpClient) {
    this.http.get<any>(environment.platinum)
    .subscribe(res=>{
      this.pmember=res;
    }),
    this.http.get<any>(environment.gold)
    .subscribe(res=>{
      this.gmember=res;
    }),
    this.http.get<any>(environment.silver)
    .subscribe(res=>{
      this.smember=res;
    })
   }
  

 
  calculateOfferprice(pmember:any):number{
    if(pmember.amount>=100){
      return pmember.amount *0.9;
    }
    else{
      return pmember.amount;
    }

  }
  //@Input() discount:member;
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
   // const offerEndTime=currentTime+this.discount.offerDuration;
   this.offerend = new Date("August 10,2023 18:00:00").getTime();
    this.timer=setInterval(()=>{
      const now=new Date().getTime();
     // this.timeLeft=Math.max(offerEndTime - now,0);
     this.timeLeft=this.offerend-now;
      var distance=this.timeLeft;
      var days = Math.floor(distance/(1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
      var seconds = Math.floor((distance % (1000*60))/1000);
      this.demo=days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";
      if(this.timeLeft===0){
       // this.discount.price=this.discount.discountPrice;
        this.clearTimer();
        alert();
      }
    },1000);
  }
  private clearTimer():void{
    clearInterval(this.timer);
  }

}
