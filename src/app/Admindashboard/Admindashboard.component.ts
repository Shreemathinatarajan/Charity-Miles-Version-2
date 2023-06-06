import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-Admindashboard',
  templateUrl:'./Admindashboard.component.html',
  styleUrls: ['./Admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  regusers:any;
  constructor(private service:FormService){
    this.service.getinfo().subscribe(data=>{
      this.regusers = data;
    });
    
  }

  ngOnInit() {
  }

}
