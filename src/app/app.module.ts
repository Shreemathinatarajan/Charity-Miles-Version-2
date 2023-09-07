import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { CharityComponent } from './Charity/Charity.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { AdminheaderComponent } from './Adminheader/Adminheader.component';
import { AdmindashboardComponent } from './Admindashboard/Admindashboard.component';
import { AdmineventComponent } from './Adminevent/Adminevent.component';
import { AdminMembershipComponent } from './AdminMembership/AdminMembership.component';
import { AdminProfileComponent } from './AdminProfile/AdminProfile.component';
import { RatingComponent } from './Charity/rating/rating.component';
import { MembershipComponent } from './Charity/Membership/Membership.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { EventComponent } from './Charity/Event/Event.component';
import { AdminpaymentComponent } from './Adminpayment/Adminpayment.component';
import { VieweventComponent } from './Charity/Event/viewevent/viewevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AppointmentComponent } from './Appointment/Appointment.component';
import { AdminAppointmentComponent } from './AdminAppointment/AdminAppointment.component';
import { CharitymembershipComponent } from './Charity/Membership/Charitymembership/Charitymembership.component';
import { OffercharitymembershipComponent } from './Charity/Membership/offercharitymembership/offercharitymembership.component';


@NgModule({
  declarations: [																																																
    AppComponent,
      HomeComponent,
      CharityComponent,
      ContactComponent,
      AboutComponent,
      LoginComponent,
      RegistrationComponent,
      PaymentComponent,
      HeaderComponent,
      FooterComponent,
      RatingComponent,
      MembershipComponent,
      AdminheaderComponent,
      AdmineventComponent,
      AdminMembershipComponent,
      AdminProfileComponent,
      AdmindashboardComponent,
      EventComponent,
      AdminpaymentComponent,
      VieweventComponent,
      UserdetailsComponent,
      AppointmentComponent,
      AdminAppointmentComponent,
      CharitymembershipComponent,
      OffercharitymembershipComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
