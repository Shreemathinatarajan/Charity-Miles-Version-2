import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor(private http:HttpClient) { }
PostAppointment(body:any){
  return this.http.post(environment.Appointment,body)
}
GetAppointment(){
  return this.http.get(environment.Appointment)
}
UpdateAppointment(detail:any,id:any){
  return this.http.patch('$(environment.registeruser)${id}',detail);
}

updatemsg(details:any,id:any){
  return this.http.patch('${environment.registeruser}${id}',details)
}
}
