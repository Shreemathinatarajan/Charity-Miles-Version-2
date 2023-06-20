import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { AdmineventModule } from './adminevent/adminevent.module';
import { AdmineventService } from './adminevent.service';


@Component({
  selector: 'app-Adminevent',
  templateUrl: './Adminevent.component.html',
  styleUrls: ['./Adminevent.component.css']
})
export class AdmineventComponent implements OnInit {
  
  formValue !: FormGroup;
  admineventobj:AdmineventModule = new AdmineventModule();
  eventData !: any;
  showadd !: any;
  showupdate !: any;
  constructor(private fb:FormBuilder,private adminevent:AdmineventService) { }

  ngOnInit() {
    this.formValue=this.fb.group({
      evedate:[''],
      event:[''],
      message:[''],
    })
    this.getAllEvent();
  }
  clickAddEvent(){
    this.formValue.reset();
    this.showadd = true;
    this.showupdate = false;
  }
  posteventdetails(){
    this.admineventobj.evedate=this.formValue.value.evedate;
    this.admineventobj.event=this.formValue.value.event;
    this.admineventobj.message=this.formValue.value.message;

    this.adminevent.postevent(this.admineventobj)
    .subscribe(res=>{
      console.log(res);
      alert("Event Added Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEvent();
    },
    err=>{
      alert("Something went wrong");
  })
  }
  getAllEvent(){
    this.adminevent.getevent(0).subscribe(res=>{
      this.eventData=res;
      //localStorage.setItem('res',JSON.stringify(res));
    })
  }
  deleteEvent(row:any){
    this.adminevent.deleteevent(row.id)
    .subscribe(res=>{
      console.log(res);
      alert("Event Deleted Successfully");
      this.getAllEvent();
    })
  }
  onEdit(row:any){
    this.showadd = false;
    this.showupdate = true;
    this.admineventobj.id = row.id;
    this.formValue.controls['evedate'].setValue(row.evedate);
    this.formValue.controls['event'].setValue(row.event);
    this.formValue.controls['message'].setValue(row.message);
  }
  updateEvents(){
    this.admineventobj.evedate=this.formValue.value.evedate;
    this.admineventobj.event=this.formValue.value.event;
    this.admineventobj.message=this.formValue.value.message;
    this.adminevent.updateevent(this.admineventobj,this.admineventobj.id)
    .subscribe(res=>{
      alert("Event Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEvent();
    })
  }
}
