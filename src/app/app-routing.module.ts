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
import { PlatinumpaymentComponent } from './Charity/Membership/platinumpayment/platinumpayment.component';
import { GoldpaymentComponent } from './Charity/Membership/goldpayment/goldpayment.component';
import { SilverpaymentComponent } from './Charity/Membership/silverpayment/silverpayment.component';
import { EventpaymentComponent } from './eventpayment/eventpayment.component';
import { AdminpaymentComponent } from './Adminpayment/Adminpayment.component';
import { VieweventComponent } from './Charity/Event/viewevent/viewevent.component';
import { ForgotComponent } from './Login/Forgot/Forgot.component';




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
    path:'Admindashboard',
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
    path:'Platinumpayment',
    component:PlatinumpaymentComponent
  },
  {
    path:'Goldpayment',
    component:GoldpaymentComponent
  },
  {
    path:'Silverpayment',
    component:SilverpaymentComponent
  },
  {
    path:'Eventpayment',
    component:EventpaymentComponent
  },
  {
    path:'Event/:id',
    component:VieweventComponent
  },
  {
    path:'Forgot',
    component:ForgotComponent
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
