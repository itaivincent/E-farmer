import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/endpoints.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, public api:EndpointsService) { }

  ngOnInit(): void {
   
  }
   
  logout(){
    this.api.logout().subscribe(()=>{
    localStorage.clear();  
    this.router.navigate(['login']);  
    })
  }
}
