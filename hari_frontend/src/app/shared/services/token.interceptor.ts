import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { EventsService } from './events.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private router: Router, private eventService: EventsService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'X-auth': `${token}`
                }
            });
        }

        return next.handle(request).do((event: HttpEvent<any>) => {

        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                // this.eventService.broadcast('loader:hide');
                if (err.status === 401) {
                    const account_type = localStorage.getItem('account_type');
                    localStorage.clear();
                    this.router.navigate(['/login']);
                }
            }
        });
    }
}
