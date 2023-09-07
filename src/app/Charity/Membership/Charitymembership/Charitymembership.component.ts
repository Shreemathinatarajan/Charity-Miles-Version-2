import { Component, OnInit, ViewChild } from '@angular/core';
import { member } from 'src/app/member.model';
import { NgForm } from '@angular/forms';
import { MembershipService } from '../membership.service';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Charitymembership',
  templateUrl: './Charitymembership.component.html',
  styleUrls: ['./Charitymembership.component.css']
})
export class CharitymembershipComponent implements OnInit {

  user:any;
  ud:any
  Name:any;
  Phone:any;
  Price:any;
  @ViewChild('MembershipForm') MembershipForm!: NgForm;
  Input=false;
 
  constructor(private member:MembershipService,private http:HttpClient) {
    this.http.get<any>(environment.Price).subscribe(data=>{
      this.Price=data;
    })
   }

  ngOnInit() {
    if(sessionStorage.getItem('user')){
      let un = sessionStorage.getItem('user');
      this.ud = un && JSON.parse(un);
    //  this.Name=ud.uname;
      //this.Phone=ud.mobileno;
   }    
  }

  selecttype:string='';
  Membershiptype=[
    {value:'Platinum',label:'Platinum'},
    {value:'Gold',label:'Gold'},
    {value:'Silver',label:'Silver'},
  ];

  //Expiry Date Calucation
  registrationDate: Date = new Date(); 

  platinumcalculateEndDate(): Date {
    const numberOfDaysInPackage = 365; // Change this as needed
    const endDate = new Date(this.registrationDate);
    endDate.setDate(endDate.getDate() + numberOfDaysInPackage);
    return endDate;
  } 
  goldcalculateEndDate(): Date {
    const numberOfDaysInPackage = 183; // Change this as needed
    const endDate = new Date(this.registrationDate);
    endDate.setDate(endDate.getDate() + numberOfDaysInPackage);
    return endDate;
  } 
  silvercalculateEndDate(): Date {
    const numberOfDaysInPackage = 91; // Change this as needed
    const endDate = new Date(this.registrationDate);
    endDate.setDate(endDate.getDate() + numberOfDaysInPackage);
    return endDate;
   
  } 
  platinumdate:Date=this.platinumcalculateEndDate();
  golddate:Date=this.goldcalculateEndDate();
  silverdate:Date=this.silvercalculateEndDate();
  
  //Platinum
  Type='Platinum';
  Mobile:any;
  platinumprice=999;
  platinumvalidity='1 Year';
  platinumstartdate:any;
  platinumenddate:any;
  platinumcardname:any;
  platinumcardno:any;
  platinumcardexp:any;
  platinumcardcvv:any;
  PlatinumMembershipSubmit(){
    var body={
    Type:this.Type,
    Name:this.ud.uname,
    Mobile:this.Phone,
    price:this.platinumprice,
    validity:this.platinumvalidity,
    startdate:this.registrationDate,
    enddate:this.platinumdate,
    cardname:this.platinumcardname,
    cardno:this.platinumcardno,
    cardexp:this.platinumcardexp,
    cardcvv:this.platinumcardcvv
    
    }
    this.member.postplatinummembership(body).subscribe(res=>{
      alert("Thank you for joining in Membership. Welcome to Charity Miles");
    });   
    this.http.patch("http://localhost:3000/registereduser/"+this.ud.id,body).subscribe(res=>{
      alert("Membership Updated to Donor");
    })
  }

  
  
  //Gold
  Type1='Gold';
  goldprice=699;
  goldvalidity='6 Months';
  goldstartdate:any;
  goldenddate:any;
  goldcardname:any;
  goldcardno:any;
  goldcardexp:any;
  goldcardcvv:any;
  goldMembershipSubmit(){
    var body={
    Type:this.Type1,
    Name:this.Name,
    Mobile:this.Phone,
    price:this.goldprice,
    validity:this.goldvalidity,
    startdate:this.registrationDate,
    enddate:this.golddate,
    cardname:this.goldcardname,
    cardno:this.goldcardno,
    cardexp:this.goldcardexp,
    cardcvv:this.goldcardcvv
    }
    this.member.postgoldmembership(body).subscribe(res=>{
      alert("Thank you for joining in Membership. Welcome to Charity Miles");
      
    });
    this.http.patch("http://localhost:3000/registereduser/"+this.ud.id,body).subscribe(res=>{
      alert("Membership Updated to Donor");
    })
}
  

  //Silver
  Type2='Silver';
  silverprice=399;
  silvervalidity='3 Months';
  silverstartdate:any;
  silverenddate:any;
  silvercardname:any;
  silvercardno:any;
  silvercardexp:any;
  silvercardcvv:any;
  silverMembershipSubmit(){
    var body={
    Type:this.Type2,
    Name:this.Name,
    Mobile:this.Phone,
    price:this.silverprice,
    validity:this.silvervalidity,
    startdate:this.registrationDate,
    enddate:this.silverdate,
    cardname:this.silvercardname,
    cardno:this.silvercardno,
    cardexp:this.silvercardexp,
    cardcvv:this.silvercardcvv
    }
    this.member.postsilvermembership(body).subscribe(res=>{
      alert("Thank you for joining in Membership. Welcome to Charity Miles");
    });
    this.http.patch("http://localhost:3000/registereduser/"+this.ud.id,body).subscribe(res=>{
      alert("Membership Updated to Donor");
    })
  }
 


  
}
