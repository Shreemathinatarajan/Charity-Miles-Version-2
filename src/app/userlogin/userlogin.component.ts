import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAuthService } from '../LoginAuth.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userName:any;
  password:any;
  retUrl:any="";
  retUrl1:any="Admin";

  constructor(private LoginAuth:LoginAuthService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }

  form(){
    var body={
      uname:this.userName,
      pass:this.password
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
      console.log("UserloginComponent/ngOnInit",this.retUrl);
    })
  }
  onLogin(loginForm: NgForm){
    this.LoginAuth.login(this.userName,this.password).subscribe((data)=>{
      console.log("return to"+this.retUrl);
   
    console.log(loginForm.value);
    const token = this.LoginAuth.authUser(loginForm.value);
   
    if(this.retUrl!=null){
      alert("Login Successfully")
      this.router.navigate([this.retUrl]);
    }
    else if(this.userName=="admin" && this.password=="Admin@123"){
      alert("Admin Logged In Successfully");
      this.router.navigate([this.retUrl1]);
    }
    else if(token){
      localStorage.setItem('token',token.userName);
      alert("Login Successfully");
      window.open("/Home")
    }
    
  })
    
  }
}
