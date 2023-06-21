import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-Forgot',
  templateUrl: './Forgot.component.html',
  styleUrls: ['./Forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgot:FormGroup|any;
  constructor() { }

  ngOnInit() {
    this.forgot = new FormGroup({
      'password':new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*].{8,20}$")]),
      'cpass':new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*].{8,20}$")]),
    })
  }
  msg(){
    alert("Password Updated...")
  }

}
