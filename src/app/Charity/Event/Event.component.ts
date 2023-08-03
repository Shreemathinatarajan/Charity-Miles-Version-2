import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmineventService } from 'src/app/Adminevent/adminevent.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-Event',
  templateUrl: './Event.component.html',
  styleUrls: ['./Event.component.css']
})
export class EventComponent implements OnInit {

  events:any;
  viewevents:any;
   constructor(private adminevent:AdmineventService){
    this.adminevent.getevent(0).subscribe(res=>{
      this.events=res;
    })
    

   }
  ngOnInit() {
    
  }
}
