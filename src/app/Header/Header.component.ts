import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Login/login.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  
  username:any;
  Email:any;
  type:string='default';
  constructor(private route:Router,public loginservice:LoginService) { }
  
  
  ngOnInit() {
    if(localStorage.getItem('user')){
      let un = localStorage.getItem('user');
      let ud = un && JSON.parse(un);
      this.username=ud.uname;
      this.type='user';
    }
    else{
      this.type='default';
    }
   
  }
  
  onLogout(){
    localStorage.removeItem('user');
    this.route.navigate[('/Home')];
    window.location.reload();
  }
}

