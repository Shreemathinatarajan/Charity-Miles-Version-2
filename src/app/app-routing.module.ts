import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { CharityComponent } from './Charity/Charity.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './Header/Header.component';
import { AdminheaderComponent } from './Adminheader/Adminheader.component';
import { AdmindashboardComponent } from './Admindashboard/Admindashboard.component';
import { AdmineventComponent } from './Adminevent/Adminevent.component';
import { AdminMembershipComponent } from './AdminMembership/AdminMembership.component';
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

const routes: Routes = [
  {
    path:'Header',
    component:HeaderComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'About',
    component:AboutComponent,
  },
  {
    path:'Charity',
    component:CharityComponent,
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Registration',
    component:RegistrationComponent
  }, 
  {
    path:'Payment',
    component:PaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Adminheader',
    component:AdminheaderComponent
  },
  {
    path:'Admin',
    component:AdmindashboardComponent
  },
  {
    path:'Adminevent',
    component:AdmineventComponent
  },
  {
    path:'AdminMembership',
    component:AdminMembershipComponent
  },
  {
    path:'Adminpayment',
    component:AdminpaymentComponent
  },
  {
    path:'rating',
    component:RatingComponent
  },
  {
    path:'Membership',
    component:MembershipComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Event',
    component:EventComponent
  },
  {
    path:'User',
    component:UserdetailsComponent
  },
  {
    path:'Appointment',
    component:AppointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'AdminAppointment',
    component:AdminAppointmentComponent
  },
  {
    path:'ChooseMembership',
    component:CharitymembershipComponent
  },
  {
    path:'OfferMembership',
    component:OffercharitymembershipComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
