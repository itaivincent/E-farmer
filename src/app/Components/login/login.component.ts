import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/endpoints.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private api:EndpointsService) { }

  ngOnInit(): void {

    this.login = this.fb.group({
        email:['',Validators.compose([Validators.required,Validators.email])],
        password:['',Validators.required]

    })

  }

  loginSubmit(data:any){
    // this.api.login(data).subscribe((data:any)=>{  
    // })
    localStorage.setItem("isLoggedin","true");
    this.router.navigate(['dashboard']);
  }

  gotosignup(){
    this.router.navigate(['register'])
  }

}
