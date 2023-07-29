import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit{
 /* @Input() expirationDate:any;
  timeRemaining:any;
  private timer:any;
  
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }
  ngOnDestroy(): void {
   this.stopTimer();
  }
  private startTimer(){
    this.timer=setInterval(()=>{
      const now = new Date();
      const difference = this.expirationDate.getTime()-now.getTime();
      if(difference>0){
        const minutes = Math.floor((difference%(1000*60*60))/(1000*60));
        const seconds = Math.floor((difference%(1000*60))/1000);
        this.timeRemaining='${minutes}m ${seconds}s';
      }
      else{
        this.stopTimer();
        this.timeRemaining='Expired';
      }
    },1000);
  }
  private stopTimer(){
    clearInterval(this.timer);
  }*/

  constructor(){}
  ngOnInit(): void {
    
  }
 

}
