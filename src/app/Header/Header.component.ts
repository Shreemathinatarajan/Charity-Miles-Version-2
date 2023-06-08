import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../LoginAuth.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Service:LoginAuthService) { }
  
  
  ngOnInit() {
   
  }
  loggedIn(){
    return localStorage.getItem('token');
  }
  onLogout(){
    localStorage.removeItem('token');
  }
}

