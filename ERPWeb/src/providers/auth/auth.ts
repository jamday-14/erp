import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Settings } from '../settings/settings';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthProvider implements HttpInterceptor {
  constructor(public settings: Settings, public events: Events) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.events.publish("unauthorized:requestError");
        } else if (err.status === 408) {
          this.events.publish("timeout:requestError");
        }
      } else if (err.name === "TimeoutError") {
        this.events.publish("timeout:requestError");
      }
    })
  }
}
