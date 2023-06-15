import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginservice:LoginService,private route:Router) { }
  public totalitem=0;
  ngOnInit() {
  }
  onLogout(){
    this.loginservice.onLogout();
    this.route.navigate(['Home']);
  }
  
}
