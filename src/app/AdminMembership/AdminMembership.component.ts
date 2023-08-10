import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../Charity/Membership/membership.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AdminMembership',
  templateUrl: './AdminMembership.component.html',
  styleUrls: ['./AdminMembership.component.css']
})
export class AdminMembershipComponent implements OnInit {
  platinummembership:any;
  validity:any;
  goldmembership:any;
  goldvalidity:any;
  silvermembership:any;
  silvervalidity:any;
  expirydate:any;

  constructor(private memberservice:MembershipService,private http:HttpClient,public loginservice:LoginService) {

    this.http.get(environment.platinum).subscribe(res=>{
      this.validity=res;
    });
    this.http.get(environment.platinummember).subscribe(res=>{
      this.platinummembership=res;
    });
    this.http.get(environment.gold).subscribe(res=>{
      this.goldvalidity=res;
    });
    this.http.get(environment.goldmember).subscribe(res=>{
      this.goldmembership=res;
    });
    this.http.get(environment.silver).subscribe(res=>{
      this.silvervalidity=res;
    });
    this.http.get(environment.silvermember).subscribe(res=>{
      this.silvermembership=res;
    });
  }

  ngOnInit() {}
  
  
   
}


 






