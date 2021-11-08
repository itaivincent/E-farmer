import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Registration } from './registration';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private httpClient: HttpClient) { }

  registration(regBody:any):Observable<Registration>{
   const regEndpoint = 'http://localhost:3000/products'; 
   return this.httpClient.post<Registration>(regEndpoint,regBody); // returns an observable
  }

  login(loginBody:any):Observable<Login>{
    const loginEndpoint = 'http://localhost:3000/products'; 
    return this.httpClient.post<Login>(loginEndpoint,loginBody); // returns an observable
   }


}
