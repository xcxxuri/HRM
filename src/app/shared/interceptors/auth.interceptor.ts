import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const token = this.auth.getToken();
        if (token) {
            // clone the request because the original request is immutable
            request = request.clone({
                setHeaders: { 'Authorization' : 'Bearer ' + token }
            });
        }

        return next.handle(request);
    }
}
