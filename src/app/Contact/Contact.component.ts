import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:FormGroup|any;
  con:any;
  constructor(private http:HttpClient,private contactservice:ContactService) { }

  ngOnInit() {
    this.contact = new FormGroup({
      'uname':new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      'emailid':new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
      
    })
  }
  contactdata(contact:FormGroup){
    //console.log(this.contact.value);
    this.con = this.contact.value.uname
    this.http.post<any>("http://localhost:3000/contact", this.contact.value)
    .subscribe(res=>{
      this.contactservice.success();
      this.contact.reset();
    },err=>{
      alert('Something went wrong');
    })
  }
}

