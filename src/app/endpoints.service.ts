import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Registration } from './registration';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private httpClient: HttpClient, public router:Router) { }

  registration(regBody:any):Observable<Registration>{
   const regEndpoint = 'http://localhost:3000/products'; 
   return this.httpClient.post<Registration>(regEndpoint,regBody); // returns an observable
  }

  login(loginBody:any){
    const loginEndpoint = 'http://smartfarmer.dbs.solutions:8000/api/auth/login'; 
    return this.httpClient.post(loginEndpoint,loginBody,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    }); // returns an observable
   }

   logout(){ 
    const logout = 'http://smartfarmer.dbs.solutions:8000/api/auth/logout'; 
    return this.httpClient.post(logout,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })}); // returns an observable  
   }

   get_growers(){
    let growers = 'http://smartfarmer.dbs.solutions:8000/api/growers'; 
    return this.httpClient.get(growers,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })}); // returns an observable  
   }

   createGrower(growerPersonalDetails:any){
    let endpoint = 'http://smartfarmer.dbs.solutions:8000/api/grower/add'; 
    return this.httpClient.post(endpoint,growerPersonalDetails,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })}); // returns an observable  
   }


   getToken(){
     return localStorage.getItem('token')
   }


}
