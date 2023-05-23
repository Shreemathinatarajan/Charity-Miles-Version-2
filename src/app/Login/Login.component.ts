import { Component, OnInit } from '@angular/core';
import { LoginformService } from '../loginform.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  username:any="";
  password:any="";
  retUrl:any="Home";
  retUrl1:any="Admin";

  constructor(private LoginFormService:LoginformService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }
  form(){
    var body={
      uname:this.username,
      pass:this.password
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
      console.log("LoginComponent/ngOnInit",this.retUrl);
    })
  }
  onLogin(){
    this.LoginFormService.login(this.username,this.password).subscribe((data)=>{
      console.log("return to"+this.retUrl);
      if(this.retUrl!=null){
        alert("Login Successfully");
        this.router.navigate([this.retUrl]);
      }
      else if(this.username=="admin" && this.password=="Admin@123"){
        alert("Admin Logged In Successfully");
        this.router.navigate([this.retUrl1]);
      }
      else{
        alert("Login Successfully");
        window.open("Home");
      }
    })
  }
   

}
