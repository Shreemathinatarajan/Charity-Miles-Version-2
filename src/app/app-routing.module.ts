import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { CharityComponent } from './Charity/Charity.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { RegisterComponent } from './Register/Register.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './Admin/Admin.component';
import { HeaderComponent } from './Header/Header.component';
import { AdminheaderComponent } from './Adminheader/Adminheader.component';
import { AdmindashboardComponent } from './Admindashboard/Admindashboard.component';
import { AdmineventComponent } from './Adminevent/Adminevent.component';
import { AdminAddComponent } from './AdminAdd/AdminAdd.component';
import { AdminMembershipComponent } from './AdminMembership/AdminMembership.component';
import { AdminreviewComponent } from './Adminreview/Adminreview.component';
import { UserloginComponent } from './userlogin/userlogin.component';



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
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Payment',
    component:PaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Admin',
    component:AdminComponent
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
    path:'AdminAdd',
    component:AdminAddComponent
  },
  {
    path:'AdminMembership',
    component:AdminMembershipComponent
  },
  {
    path:'Adminreview',
    component:AdminreviewComponent
  },
  {
    path:'userlogin',
    component:UserloginComponent
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
