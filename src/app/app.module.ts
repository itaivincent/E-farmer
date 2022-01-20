import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentComponent } from './Components/content/content.component';
import { LandingComponent } from './Components/landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpinterceptorService } from './httpinterceptor.service';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ContractComponent } from './Components/contract/contract.component';
import { AssigncontractComponent } from './Components/assigncontract/assigncontract.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LandingComponent,
    LoginComponent,
    RegistrationComponent,
    ContractComponent,
    AssigncontractComponent, 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
  useClass: HttpinterceptorService,
   multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
