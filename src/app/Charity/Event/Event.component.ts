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
  /*filterevent:any;
  searchValue:any;
  selectcat:string='';
  searchterm:string='';

  

  constructor(private eventservice:AdmineventService,private param:ActivatedRoute,private service:EventService) {
    this.eventservice.getevent(0).subscribe(res=>{
      this.events=res;
      this.filterevent=res;
    })
   }

   filterevents(){
    if(this.selectcat === '' && this.searchterm === ''){
      this.filterevent = this.events;
    }
    else if(this.selectcat === ''){
      this.filterevent = this.events.filter(eve=> eve.model.toLowerCase().includes(this.searchterm.toLowerCase()));
    }
    else if(this.searchterm === ''){
      this.filterevent = this.events.filter(eve=> eve.category.toLowerCase() === this.selectcat.toLowerCase());
    }
    else{
      this.filterevent = this.events.filter(eve => eve.category.toLowerCase() === this.selectcat.toLowerCase() && 
      eve.model.toLowerCase().includes(this.searchterm.toLowerCase()));
    }
   }*/

   constructor(private adminevent:AdmineventService){
    this.adminevent.getevent(0).subscribe(res=>{
      this.events=res;
    })
    

   }
  ngOnInit() {
    
  }
}
