import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../Charity/Membership/membership.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Login/login.service';

@Component({
  selector: 'app-AdminMembership',
  templateUrl: './AdminMembership.component.html',
  styleUrls: ['./AdminMembership.component.css']
})
export class AdminMembershipComponent implements OnInit {
  membership:any;
  validity:any;
  gmembership:any;
  gvalidity:any;
  smembership:any;
  svalidity:any;


  constructor(private memberservice:MembershipService,private http:HttpClient,public loginservice:LoginService) {
    /*this.memberservice.getplatinum().subscribe(res=>{
      this.membership=res;
    });*/

    this.http.get("http://localhost:3000/platinum").subscribe(res=>{
      this.validity=res;
    });
    this.http.get("http://localhost:3000/Platinummember").subscribe(res=>{
      this.membership=res;
    });
    this.http.get("http://localhost:3000/gold").subscribe(res=>{
      this.gvalidity=res;
    });
    this.http.get("http://localhost:3000/Goldmember").subscribe(res=>{
      this.gmembership=res;
    });
    this.http.get("http://localhost:3000/silver").subscribe(res=>{
      this.svalidity=res;
    });
    this.http.get("http://localhost:3000/Silvermember").subscribe(res=>{
      this.smembership=res;
    });
  }

  ngOnInit() {
  }

}
