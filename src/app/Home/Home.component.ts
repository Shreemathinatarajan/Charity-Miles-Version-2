import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginservice:LoginService,private route:Router) { }
  public totalitem=0;
  ngOnInit() {
  }
  onLogout(){
    this.loginservice.onLogout();
    this.route.navigate[('/Home')];
  }
  /*imgcollection:Array<object>=[
    {
      Image:'D:\AngularCharityApplication\src\assets\Image\about2.png'
    },{
      Image:'https://static.vecteezy.com/system/resources/previews/000/401/981/non_2x/vector-people-volunteering-and-donating-money-and-items-to-a-charitable-cause.jpg'
    },{
      Image:'https://media.istockphoto.com/vectors/concept-of-charity-and-donation-people-give-and-share-love-money-vector-id1256079963?k=20&m=1256079963&s=612x612&w=0&h=Jfk9qn1O7g5LoP3aGIVAGwDFv4K3dhCc4wNY-pH50zk='
    }
  ];*/
}
