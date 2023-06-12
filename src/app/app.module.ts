import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { CharityComponent } from './Charity/Charity.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { RegisterComponent } from './Register/Register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './Admin/Admin.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { AdminheaderComponent } from './Adminheader/Adminheader.component';
import { AdmindashboardComponent } from './Admindashboard/Admindashboard.component';
import { AdmineventComponent } from './Adminevent/Adminevent.component';
import { AdminAddComponent } from './AdminAdd/AdminAdd.component';
import { AdminMembershipComponent } from './AdminMembership/AdminMembership.component';
import { AdminreviewComponent } from './Adminreview/Adminreview.component';
import { AdminProfileComponent } from './AdminProfile/AdminProfile.component';
import { AuthService } from './auth.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginAuthService } from './LoginAuth.service';
import { RatingComponent } from './Charity/rating/rating.component';
import { MembershipComponent } from './Charity/Membership/Membership.component';


@NgModule({
  declarations: [																															
    AppComponent,
      HomeComponent,
      CharityComponent,
      ContactComponent,
      AboutComponent,
      RegisterComponent,
      PaymentComponent,
      AdminComponent,
      UserloginComponent,
      HeaderComponent,
      FooterComponent,
      RatingComponent,
      MembershipComponent,
      AdminComponent,
      AdminheaderComponent,
      AdmineventComponent,
      AdminAddComponent,
      AdmindashboardComponent,
      AdminMembershipComponent,
      AdminreviewComponent,
      AdminProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    LoginAuthService,
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
