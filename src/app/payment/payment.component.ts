import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount:any="";
  name:any="";
  cardno:any="";
  year:any="";
  month:any="";
  cvv:any="";

 

  constructor(private PaymentService:PaymentService) { }
  SubmitForm(){
    var body={
      uamount:this.amount,
      uname:this.name,
      ucardno:this.cardno,
      uyear:this.year,
      umonth:this.month,
      ucvv:this.cvv
    }
    this.PaymentService.PaymentInfo(body).subscribe(data=>{
      console.log("paid");
      
    })
  }
  ngOnInit() {
  }

}
