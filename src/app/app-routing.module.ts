import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AssigncontractComponent } from './Components/assigncontract/assigncontract.component';
import { ContentComponent } from './Components/content/content.component';
import { ContractComponent } from './Components/contract/contract.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent   } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  { path:'register',component:LandingComponent, },
  { path:'login',component:LoginComponent,},
  { path:'',  redirectTo:'login',  pathMatch:'full'},
  { path:'home',component:ContentComponent,   /*canActivate:[AuthGuard]*/},
  { path:'registration',component:RegistrationComponent,},
  { path:'AssignContract/:id', component:AssigncontractComponent},
  { path:'contracts',component:ContractComponent},
  { path:'#',component:ContentComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
