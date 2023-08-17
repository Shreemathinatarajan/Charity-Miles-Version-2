import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelAppService {

constructor(private http:HttpClient) { }

Postcancelrequest(value:any){
  return this.http.post("http://localhost:3000/CancelRequest",value);

}
Postacceptrequest(data:any){
  return this.http.post("http://localhost:3000/AcceptedRequest",data);
}
Postcanceltodonor(value:any,id:any){
  return this.http.patch('${environment.registereduser}${}id',value)
}
cancelurl:any="http://localhost:3000/CancelRequest";
SearchCancel(data:any):Observable<any>{
  return this.http.get<any>(this.cancelurl).pipe(
    map((res)=>{
      return res.filter(
        (item:any)=>
        item.cancelledMobileno===DataTransfer
      );
    })
  )

}
}
