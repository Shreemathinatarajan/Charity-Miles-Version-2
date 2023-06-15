import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
 
  constructor(private http:HttpClient,private route:Router,public loginservice:LoginService) { }

  ngOnInit() {
    this.login = new FormGroup({
      'uname':new FormControl("",[Validators.required,Validators.pattern("[a-z]{3,20}$")]),
      'password':new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*].{8,20}$")]),
    })
  }
  logindata(login:FormGroup){
    //console.log(this.login.value);
    this.http.get<any>("http://localhost:3000/registereduser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.uname === this.login.value.uname && a.pass === this.login.value.password
      });
      if(user){ 
        alert("Login Successfully");
        localStorage.setItem('user',JSON.stringify(user));
        this.loginservice.onLogin();
        this.login.reset();
        this.route.navigate(['Home']);
      }
      /*console.log(login.value);
      const token = this.loginservice.authUser(login.value);
      if(token){
        localStorage.setItem('token',token.uname);
        console.log("Success");
        alert("Login Successfully");
        this.route.navigate(['Home']);
      }*/
      else{
        alert("Invalid Username or Password");
        this.route.navigate(['Login']);
      }
    },err=>{
      alert('Someting went wrong');
     
      
    })
   
  }
  onLogout(){
    this.isLoggedIn=false;
    this.route.navigate(['Home']);
  }
  isLoggedIn=false;
}
