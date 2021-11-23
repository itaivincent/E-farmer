import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { EndpointsService } from './endpoints.service';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor( private endpoint: EndpointsService) { }

  intercept(req:any, next:any){
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.endpoint.getToken()}`
      }
    })
    return next.handle(tokenizedreq)

  }
}
