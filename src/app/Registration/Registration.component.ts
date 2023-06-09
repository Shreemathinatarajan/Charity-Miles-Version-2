import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './Register.service';
import { Confirmpassword } from './confirmpassword';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration:FormGroup|any;
  reg:any;
  constructor(private route:Router,private http:HttpClient,private Register:RegisterService) { }

  ngOnInit() {
    this.registration = new FormGroup({
      'uname':new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      'emailid':new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
      'mobileno':new FormControl("",[Validators.required,Validators.pattern("[6-9]+[0-9]{9}$")]),
      'pass':new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}")]),
      'cpass':new FormControl("",[Validators.required])
    }),
    { Validator : Confirmpassword('pass','cpass')}
  }
  registrationdata(registration:FormGroup){
    //console.log(this.registration.value);
    this.reg = this.registration.value.uname
    this.http.post<any>("http://localhost:3000/registereduser", this.registration.value)
    .subscribe(res=>{
      this.Register.success();
      this.registration.reset();
      this.route.navigate(['Login']);
    },err=>{
      alert('Something went wrong');
    })
    
    
  }
}
