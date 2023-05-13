import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { CharityComponent } from './Charity/Charity.component';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
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
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Payment',
    component:PaymentComponent,
    canActivate:[AuthGuard]
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
