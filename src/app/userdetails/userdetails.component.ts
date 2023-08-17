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
  constructor(
    private route: Router,
    private http:HttpClient,
  ) {}

  ngOnInit() {
    if(localStorage.getItem('user')){
      let un = localStorage.getItem('user');
      this.ud = un && JSON.parse(un);
    }
    this.http.get<any>(environment.registeruser).subscribe(data=>{
      const value=data.find((a:any)=>{
        return a.uname===this.ud.uname
      })
      if(value){
        this.Data=value
      }
    })
  }
}
