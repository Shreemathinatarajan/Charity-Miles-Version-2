import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import * as alertifyjs from 'alertifyjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
  returl:any="Home";
  uname:any="";
  pass:any="";
  submit:boolean=false;
 
  constructor(private http:HttpClient,private route:Router,public loginservice:LoginService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.login = new FormGroup({
      'uname':new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9]{3,20}$")]),
      'password':new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*].{8,20}$")]),
    }),
    this.router.queryParamMap.subscribe(params=>{
      this.returl=params.get('returl');
      console.log("LoginComponent/ngOnInit"+this.returl);
    });
  }

 /* onLogin(){
    this.loginservice.login(this.uname,this.pass).subscribe((data)=>{
      console.log("return to"+this.returl);
      if(this.returl!=null){
       this.route.navigate([this.returl]);
      }
    })
  }*/
  logindata(login:FormGroup){
    this.loginservice.login(login.value.uname,login.value.pass).subscribe((data)=>{
      console.log('return to'+this.returl);
      if(this.returl!=null){
       this.route.navigate([this.returl]);
      }else{
        this.route.navigate(['/Home']);
      }
    });
    this.submit = true;
    if (this.login.invalid) {
      return;
    }
    else {
      this.user();
      this.admin();
    }
  }
    //console.log(this.login.value);
    user()  {
     this.http.get<any>(environment.registeruser)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.uname === this.login.value.uname && a.pass === this.login.value.password
      });
      if(user){ 
        alertifyjs.success("Login Successfully");
        sessionStorage.setItem('user',JSON.stringify(user));
        this.loginservice.onLogin();
        this.login.reset();
        this.route.navigate(['Home']);
      }
      else{
        alertifyjs.success("Invalid Username or Password");
        this.route.navigate(['Login']);
      }
    },err=>{
      alert('Someting went wrong');
    })
  
  }
    admin(){
    this.http.get<any>(environment.admin)
    .subscribe(res=>{
      const admin = res.find((detail:any)=>{
        return detail.uname === this.login.value.uname && detail.pass === this.login.value.password
      });
      if(admin){ 
        alertifyjs.success("Admin Loggedin Successfully");
        sessionStorage.setItem('admin',JSON.stringify(admin));
        this.loginservice.onLogin();
        this.login.reset();
        this.route.navigate(['/Admindashboard']);
      }

    },err=>{
      alert('Someting went wrong');
     
    
    }),
  
    this.http.post<any>(environment.loginuser,this.login.value)
    .subscribe(res=>{
    })
   
  }
/* onLogout(){
    this.isLoggedIn=false;
    this.route.navigate(['/Home']);
  }
  isLoggedIn=false;*/

  onLogout(){
    sessionStorage.removeItem('user');
    this.route.navigate[('/Home')];
    window.location.reload();
  }
}
