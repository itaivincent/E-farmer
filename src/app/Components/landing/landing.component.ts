import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  register:any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

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

  }

  gotologin(){
    this.router.navigate(['login'])
  }

}
