import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // if (err.status === 401 || err.status === 403) {
        if (err.status === 400) {
            this.router.navigateByUrl(`/not-found`);
        }
        return throwError(err);
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const authReq = request.clone();
        return next.handle(authReq)
            .pipe(
                catchError(error => this.handleAuthError(error))
            );
    }

}
