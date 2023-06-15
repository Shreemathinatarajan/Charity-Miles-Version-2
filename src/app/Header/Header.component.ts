import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Login/login.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor(private route:Router,public loginservice:LoginService) { }
  
  
  ngOnInit() {
   
  }
  
  onLogout(){
    this.loginservice.onLogout();
    this.route.navigate(['Home']);
  }
}

