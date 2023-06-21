import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

constructor() { }
success(){
  alert("Message Sent Successfully");
}

}
