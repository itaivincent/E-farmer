import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/endpoints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  growers:any = [];
  

  constructor(public api:EndpointsService , private router:Router) { }


  ngOnInit(): void {
   this.get_grower();
   
  }
  
  get_grower(){
  this.api.get_growers().subscribe( (data:any) =>{  
    console.log(data.data);
    this.growers = data.data;
  })
  
  }
  

}
