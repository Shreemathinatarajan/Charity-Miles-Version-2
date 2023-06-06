import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidator } from './ConfirmValidator';





@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  username:any="";
  mobile:any="";
  email:any="";
  password:any="";
  confirmpassword:any="";

  form: FormGroup=new FormGroup({});

  constructor(private FormService:FormService,private fb:FormBuilder) {
    this.form=fb.group({
      pwd:['',[Validators.required]],
      cpwd:['',[Validators.required]]
    },{
      validator:ConfirmValidator('pwd','cpwd')
    })
   }
   get f(){
    return this.form.controls;
   }
  Form(){
    var body={
      uname:this.username,
      emailid:this.email,
      mobileno:this.mobile,
      pass:this.password,
      cpass:this.confirmpassword
    }
    


    this.FormService.Information(body).subscribe(data=>{
      alert("Register Successfully");
      window.open("Home");
    })
}
  ngOnInit(): void {
    
  }
}
