import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Registration/Register.service';

@Component({
  selector: 'app-Admindashboard',
  templateUrl:'./Admindashboard.component.html',
  styleUrls: ['./Admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  regusers:any;
  constructor(private registerservice:RegisterService){
    this.registerservice.getuser().subscribe(data=>{
      this.regusers.push(data);
      console.log(this.regusers)
    });
    
  }

  ngOnInit() {
  }

}
