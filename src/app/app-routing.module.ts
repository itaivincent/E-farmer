import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContentComponent } from './Components/content/content.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent   } from './Components/login/login.component';

const routes: Routes = [
  {
    path:'register',component:LandingComponent,
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',component:ContentComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
