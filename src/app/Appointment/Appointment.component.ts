import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from '../Appointment.service';
import { NgForm,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Appointment',
  templateUrl: './Appointment.component.html',
  styleUrls: ['./Appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  Name:any;
  Email:any;
  Mobile:any;
  @ViewChild('appointmentForm') appointmentForm!: NgForm;
  ShowAppointment:any;

  constructor(private appointment:AppointmentService,private route:Router) { 
    this.appointment.GetAppointment().subscribe(data=>{
      this.ShowAppointment=data;
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      let un = localStorage.getItem('user');
      let ud = un && JSON.parse(un);
      this.Name=ud.uname;
      this.Email=ud.emailid;
      this.Mobile=ud.mobileno;
   }   
  }

  AppointmentDate:any;
  Appointmenttime:any;
  Donationitems:any;
  Quantity:any;
  Message:any;

  appStatus:any="Pending"
  AppointmentSubmit(){
    var body={
      Name:this.Name,
      Mobile:this.Mobile,
      AppointmentDate:this.AppointmentDate,
      Time:this.Appointmenttime,
      Donationitems:this.Donationitems,
      Quantity:this.Quantity,
      Message:this.Message,
      attemptstatus:"true",
      appStatus:this.appStatus
    }
    this.appointment.PostAppointment(body).subscribe(data=>{
      alert("Appointment Requested");
      this.route.navigate(['/Appointment']);
    });
    this.appointment.UpdateAppointment(body,this.Name.id).subscribe(()=>{
      alert("Update");
      this.appointmentForm.resetForm();
      let refe=document.getElementById("ref");
      refe?.click();
      this.ngOnInit();
    })
  }
  Appointment(){
    this.appointmentForm.reset();

  }
}
