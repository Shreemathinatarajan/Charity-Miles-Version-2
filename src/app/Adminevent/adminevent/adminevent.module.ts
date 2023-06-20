import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmineventComponent } from './adminevent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdmineventComponent]
})
export class AdmineventModule { 
  id:number=0;
  evedate:string='';
  event:string='';
  message:string='';
}
