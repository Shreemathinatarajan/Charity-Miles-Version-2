import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { CancelAppService } from '../CancelApp.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from '../Appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminAppointment',
  templateUrl: './AdminAppointment.component.html',
  styleUrls: ['./AdminAppointment.component.css']
})
export class AdminAppointmentComponent implements OnInit {
  Request:any;
  Acceptrequest:any;
  CancelRequest:any;

  constructor(private http:HttpClient,private cancelapp:CancelAppService,private fb:FormBuilder,private service:AppointmentService,private route:Router) { }

  ngOnInit() {
    this.http.get<any>(environment.Appointment).subscribe((res=>{
      this.Request=res;
    }));
    this.http.get<any>("http://localhost:3000/AcceptedRequest").subscribe(data=>{
      this.Acceptrequest=data;
    });
    this.http.get<any>("http://localhost:3000/CancelRequest").subscribe(info=>{
      this.CancelRequest=info;
    })

  }

  
  /*Acceptance*/
  acceptedname:any;
  acceptedmobile:any;
  accepteddate:any;
  acceptedtime:any;
  accepteditem:any;
  acceptedquantity:any;
  acceptedmsg:any;
  Accept(acceptedDetail:any,acceptId:number,acceptname:any,acceptedMobileno:any,acceptdate:any,accepttime:any,acceptitem:any,acceptquantity:any,acceptmsg:any){
    this.acceptedname=acceptname;
    this.acceptedmobile=acceptedMobileno
    this.accepteddate=acceptdate;
    this.acceptedtime=accepttime;
    this.accepteditem=acceptitem;
    this.acceptedquantity=acceptquantity;
    this.acceptedmsg=acceptmsg
    this.Donor(acceptedDetail);
    this.AccepttoDonor(acceptedMobileno);
    this.postaccepteddetails();
  }
  Donor(appdetail:any){
    this.http.get<any>(environment.Appointment).subscribe(data=>{
      const update=data.find((search:any)=>{
        return search.Name===appdetail.Name && search.Mobile===appdetail.Mobile && search.AppointmentDate===appdetail.AppointmentDate && search.Time===appdetail.Time && search.Donationitems===appdetail.Donationitems && search.Quantity===appdetail.Quantity && search.Message===appdetail.Message
      });
      if(update){
        var body={
          status:"Accepted"
        }
        this.http.patch<any>("http://localhost:3000/Appointment/"+update.id,body).subscribe(()=>{
          alert("Appointment Accepted");
          this.ngOnInit();
        });
      }
    })
  }
  appstatus:any="Appointment Accepted"
  AccepttoDonor(acceptedMobileno:any){
    this.http.get<any>(environment.registeruser).subscribe(res=>{
      const donor=res.find((a:any)=>{
        return a.mobileno===acceptedMobileno
      });
      var body={
        status:this.appstatus,
        date:this.accepteddate,
        Time:this.acceptedtime,
        items:this.accepteditem,
        quantity:this.acceptedquantity
      }
      if(donor){
        this.http.patch<any>("http://localhost:3000/registereduser/"+donor.id,body).subscribe(data=>{
          alert("Updated to donor db");
        })
      }
    })
  }
  acceptstatus:any="Pending"
  postaccepteddetails(){
    var abody={
      name:this.acceptedname,
      mobile:this.acceptedmobile,
      date:this.accepteddate,
      Time:this.acceptedtime,
      items:this.accepteditem,
      quantity:this.acceptedquantity,
      status:this.appstatus
    }
    this.cancelapp.Postacceptrequest(abody).subscribe(data=>{
    });
  }


  /*Cancel*/
  cancelledName:any="";
  cancelledMobileno:any="";
  cancelledDate:any="";
  cancelledTime:any="";
  cancelleditem:any="";
  cancelledquantity:any="";

  Cancel(cancel:any,cancelname:any,cancelmobile:any,canceldate:any,canceltime:any,cancelitem:any,cancelquatity:any){
    this.cancelledName=cancelname;
    this.cancelledMobileno=cancelmobile;
    this.cancelledDate=canceldate;
    this.cancelledTime=canceltime;
    this.cancelleditem=cancelitem;
    this.cancelledquantity=cancelquatity;
    var body={
     cancelledName:this.cancelledName,
     cancelledMobileno:this.cancelledMobileno,
     cancelledDate:this.cancelledDate,
     cancelledTime:this.cancelledTime,
     cancelleditem:this.cancelleditem,
     cancelledquantity:this.cancelledquantity,
     report:"Pending"
    }
    this.cancelapp.Postcancelrequest(body).subscribe(value=>{
    });
    this.Donorcancel(cancel);
  }
  Donorcancel(appdetail:any){
    this.http.get<any>(environment.Appointment).subscribe(res=>{
      const update=res.find((search:any)=>{
        return search.Name===appdetail.Name && search.Mobile===appdetail.Mobile && search.AppointmentDate===appdetail.AppointmentDate && search.Time===appdetail.Time
      });
      if(update){
        var body={
          status:"Cancelled"
        }
        this.http.patch<any>("http://localhost:3000/Appointment/"+update.id,body).subscribe(()=>{
          alert("Appointment Cancelled");
          this.ngOnInit();
        });
      }
    })
  }
  Sendmessage:any=""
  Message=this.fb.group({
    msg:['',Validators.required]
  })

  Sendmsg(Messagedetail:any){
    alert("Message Sent");
    this.showmessage(Messagedetail);
    var body={
      Message:this.Message.value.msg,
      reporting:"Reason Sent",

    }
    this.http.patch<any>("http://localhost:3000/CancelRequest/"+Messagedetail.id,body).subscribe(()=>{
    })
  }
  showmessage(detail:any){
    this.http.get<any>(environment.registeruser).subscribe(value=>{
      const replymsg=value.find((a:any)=>{
        return a.mobileno===detail.cancelledMobileno
      });
      if(replymsg){
        this.sendmsgtodonor(replymsg,detail)
      }
    })
  }
  sendmsgtodonor(value:any,data:any){
    var body={
     /* cancelledName:this.cancelledName,
      cancelledMobileno:this.cancelledMobileno,
      cancelledDate:this.cancelledDate,*/
      Message:this.Message.value.msg,
      status:"Cancelled! (try again)",
      name:this.cancelledName,
      mobile:this.cancelledMobileno,
      date:this.cancelledDate,
      Time:this.cancelledTime,
      items:this.cancelleditem,
      quantity:this.cancelledquantity,
    }
   /* this.service.updatemsg(body,value.id).subscribe(()=>{
      alert("Message update");
      this.Message.get('msg')?.reset('')
    })*/
    this.http.patch<any>("http://localhost:3000/registereduser/"+value.id,body).subscribe((data)=>{
      alert("Updated to donor db");
  })
  }
}
