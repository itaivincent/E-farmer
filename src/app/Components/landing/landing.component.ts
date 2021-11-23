import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/endpoints.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  register:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private endpoints:EndpointsService) { }
  id:any = 2;

  ngOnInit(): void {
    this.register = this.fb.group({
        first_name:['',Validators.required],
        last_name:['',Validators.required],
        email:['',Validators.compose([Validators.required, Validators.email])],
        password:['',Validators.required],
        confirm_password:['',Validators.required]
    })
  }


  registerSubmit(data:any){
    console.log(data);
    let dataToPass = {
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      password:data.password,
      confirm_password:data.confirm_password
    }

    this.endpoints.registration(dataToPass).subscribe((data:any)=>{
      console.log(data);
    })
  }

  gotologin(){
    this.router.navigate(['login'])
  }

}
