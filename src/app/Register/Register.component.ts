import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder } from '@angular/forms';



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

  constructor(private FormService:FormService,private fb:FormBuilder) { }
  Form(){
    var body={
      uname:this.username,
      mobileno:this.password,
      emailid:this.email,
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
