import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/endpoints.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  growers:any = [];

  constructor(private api:EndpointsService, private router:Router) { }

  ngOnInit(): void {
    this.get_grower();
  }

  get_grower(){
    this.api.get_growers().subscribe((data:any)=>{
    this.growers = data.data;
    });
  }
}
