import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private spinnerService: SpinnerService
    ) {}

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401) {
            this.router.navigateByUrl(`/unauthorized`);
        }
        if (err.status === 400) {
            this.router.navigateByUrl(`/not-found`);
        }
        this.spinnerService.loading = false;
        return of(err.message);
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const authReq = request.clone();
        return next
            .handle(authReq)
            .pipe(catchError((error) => this.handleAuthError(error)));
    }
}
