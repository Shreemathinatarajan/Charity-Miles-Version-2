import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Login/login.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loggedUser:any;
  refreshData:any;
  type:string='default';
  details:any;
  details1:any;
  constructor(private route:Router,public loginservice:LoginService,private http:HttpClient) { }
  
  
  ngOnInit() {
    if(localStorage.getItem('user')){
      let un = localStorage.getItem('user');
      let ud = un && JSON.parse(un);
      this.details=ud.uname;
      this.details1=ud.emailid;
      this.type='user';
    }
    else{
      this.type='default';
    }
   /* let donor = localStorage.getItem('isUserLoggedIn');
    if(donor){
      this.loggedUser=JSON.parse(donor);
    }
    else if(this.loginservice.isUserLoggedIn!==null){
      this.loggedUser=this.loginservice.isUserLoggedIn;
    }
    else{
     this.type='default';
    }
    this.http.get<any>(environment.registeruser).subscribe(res=>{
      const value=res.find((a:any)=>{
        return a.uname===this.loggedUser.uname
      })
      if(value){
        this.refreshData=value
      }
    })*/
  }
  
  onLogout(){
    localStorage.removeItem('user');
    this.route.navigate[('/Home')];
    window.location.reload();
  }
}

