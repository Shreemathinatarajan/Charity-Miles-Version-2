import { Component, OnInit } from '@angular/core';
import { AdmineventService } from '../Adminevent/adminevent.service';

@Component({
  selector: 'app-eventpayment',
  templateUrl: './eventpayment.component.html',
  styleUrls: ['./eventpayment.component.css']
})
export class EventpaymentComponent implements OnInit {
  eventdate:any;
  constructor(private service:AdmineventService) { 
    this.service.getevent(0).subscribe(res=>{
      this.eventdate=res;
    })
  }

  ngOnInit() {
   /* if(localStorage.getItem('res')){
      let date = localStorage.getItem('res');
      let data1 = date && JSON.parse(date);
      this.eventdate = data1.evedate;
    }*/
  }

}
