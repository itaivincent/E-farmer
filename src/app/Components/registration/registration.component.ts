import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/endpoints.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  growers:any = [];
  changes:any; 
  info:Observable<any> | undefined;
  growerPersonalDetails:FormGroup = new FormGroup({});

  constructor(public api:EndpointsService , private router:Router, private formBuilder:FormBuilder ) { }


  ngOnInit(): void {
   this.get_grower();
   this.growerPersonalDetails = this.formBuilder.group({

     'name': new FormControl(''),
     'surname': new FormControl(''),
     'nationalIdNumber': new FormControl(''),
     'dob': new FormControl(''),
     'phoneNumber': new FormControl(''),
     'village': new FormControl(''),
     'sex': new FormControl(''),
     'address': new FormControl(''),
     'sname': new FormControl(''),
     'ssurname': new FormControl(''),
     'snid': new FormControl(''),
     'saddress': new FormControl(''),
     'growerNumber' : '3948248845',
     'amaNumber' : '1022',
     'date' : '02/01/0393',
     'maritalStatus' : 'Single',
     'warVet' : 'No',
     'chief' : 'moyo',
     'nextOfKinNationalIdNumber':'43759075'
    
   })

   new Observable(observer =>{
     setTimeout(() => {
       observer.next("In Progress");
     }, 2000);

     setTimeout(() => {
      observer.next("Processing");
    }, 5000);

    setTimeout(() => {
      observer.next("Completed");
    }, 8000);

    //stopping the observer process
    setTimeout(() => {
      observer.complete();
    }, 8000);


   }).subscribe(val => {     
    this.changes = val;
   });
   
  }
  
  get_grower(){
    this.api.get_growers().subscribe( (data:any) =>{  
    this.growers = data.data;
  })
  
  }

  createGrower(){  
    this.api.createGrower({"growerPersonalDetails":this.growerPersonalDetails.value,"growerNextOfKinDetails":this.growerPersonalDetails.value}).subscribe(data => {
      this.successAlert();
    }, err => {
      this.failAlert();
    })
  }

  successAlert(){
    Swal.fire({
      title: 'Success!',
      text: "You have successfully created a Grower!",
      icon: 'success',  
    })
  }

  failAlert(){
    Swal.fire({
      title: 'warning!',
      text: "Failed to create Grower!",
      icon: 'warning',  
    })
  }


    

}
