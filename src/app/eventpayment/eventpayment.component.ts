import { Component, OnInit } from '@angular/core';
import { AdmineventService } from '../Adminevent/adminevent.service';
import { EventService } from '../Charity/Event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventpayment',
  templateUrl: './eventpayment.component.html',
  styleUrls: ['./eventpayment.component.css']
})
export class EventpaymentComponent implements OnInit {
  eventdate:any;

  geteventid:any;
  eventdata:any;

  constructor(private service:AdmineventService,private eventservice:EventService,private param:ActivatedRoute) { 
    this.service.getevent(0).subscribe(res=>{
      this.eventdate=res;
    })
  }

  ngOnInit() {
    this.geteventid = this.param.snapshot.paramMap.get('id');
    console.log(this.geteventid,'getmenu');
    if(this.geteventid){
      this.eventdata=this.eventservice.Eventdetails.filter((value)=>{
        return value.id == this.geteventid;
      });
      console.log(this.eventdata,'eventdata>>');
    }
  }

}
