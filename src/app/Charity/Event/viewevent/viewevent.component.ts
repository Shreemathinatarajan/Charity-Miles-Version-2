import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  
  geteventid:any;
  eventdata:any;
  viewevents:any;
  constructor(private eventservice:EventService,private param:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.geteventid = this.param.snapshot.paramMap.get('id');
    console.log(this.geteventid,'getevent');
    if(this.geteventid){
      this.eventdata=this.eventservice.Eventdetails.filter((value)=>{
        return value.id == this.geteventid;
      });
      console.log(this.eventdata,'eventdata>>');
    }
  }

  }


