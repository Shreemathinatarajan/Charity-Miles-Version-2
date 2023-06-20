import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmineventService {

constructor(private http:HttpClient) { }
postevent(data:any){
  return this.http.post<any>("http://localhost:3000/events",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getevent(data:any){
  return this.http.get<any>("http://localhost:3000/events/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
updateevent(data:any,id:number){
  return this.http.get<any>("http://localhost:3000/events/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteevent(id:number){
  return this.http.delete<any>("http://localhost:3000/events/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
