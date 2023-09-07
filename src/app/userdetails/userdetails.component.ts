import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  ud:any;
  Data:any;
  paydata:any;
  expdate:any;
  todaydate:Date=new Date();
  constructor(
    private route: Router,
    private http:HttpClient,
  ) {}

  ngOnInit() {
    if(sessionStorage.getItem('user')){
      let un = sessionStorage.getItem('user');
      this.ud = un && JSON.parse(un);
    }
    this.http.get<any>(environment.registeruser).subscribe(data=>{
      const value=data.find((a:any)=>{
        return a.uname===this.ud.uname
      })
      if(value){
        this.Data=value
      }
      this.expdate=new Date(data.enddate);
    });
    this.getpaymentdetail();
  }

  getpaymentdetail(){
    this.http.get(environment.payment).subscribe((data:any)=>{
      const finduser=this.ud.uname;
      this.paydata=data.filter(user=>user.username===finduser);
    });
  }
  Renew():boolean{
    return this.expdate && this.todaydate >= this.expdate;
  }
}
