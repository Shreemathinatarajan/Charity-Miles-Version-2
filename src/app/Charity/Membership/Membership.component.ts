import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Membership',
  templateUrl: './Membership.component.html',
  styleUrls: ['./Membership.component.css']
})
export class MembershipComponent implements OnInit {
  
  pmember:any;
  gmember:any;
  smember:any;
  constructor(private http:HttpClient) {
    this.http.get<any>("http://localhost:3000/platinum")
    .subscribe(res=>{
      this.pmember=res;
    }),
    this.http.get<any>("http://localhost:3000/gold")
    .subscribe(res=>{
      this.gmember=res;
    }),
    this.http.get<any>("http://localhost:3000/silver")
    .subscribe(res=>{
      this.smember=res;
    })
   }
  

  ngOnInit() {
  }

}
