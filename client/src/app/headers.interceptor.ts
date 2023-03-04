import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token='';
    const headers = new HttpHeaders().set('acess-token', token).set('Authorization', 'Bearer '+token);
    const AuthRequest = request.clone({ headers: headers});
    return next.handle(AuthRequest);
  }
}
