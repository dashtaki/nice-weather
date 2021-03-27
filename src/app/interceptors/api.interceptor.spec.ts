import { fakeAsync, TestBed } from '@angular/core/testing';
import { ApiInterceptor } from './api.interceptor';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
    TestRequest,
} from '@angular/common/http/testing';
import { API_KEY } from '../../constants/ApiConstants';
import {TransportService} from '../services/transport.service';

describe('ApiInterceptor', () => {
    let mockRouter;
    let mockTransportService;
    let httpMock: HttpTestingController;
    let transportService: TransportService;

    function produceApiError(status: number): void {
        const mockErrorResponse: any = { status, statusText: 'Bad Request' };
        const data: string = 'Invalid';
        transportService.Read('sad').subscribe();
        const expectedQuery: string = `sad&appid=${API_KEY}`;
        const req: TestRequest = httpMock.expectOne(expectedQuery);
        req.flush(data, mockErrorResponse);
    }

    beforeEach(() => {
        mockRouter = jasmine.createSpyObj(['navigateByUrl']);
        mockTransportService = jasmine.createSpyObj(['Read']);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
                ApiInterceptor,
                { provide: Router, useValue: mockRouter },
            ],
        });

        httpMock = TestBed.inject(HttpTestingController);
        transportService = TestBed.inject(TransportService);
    });

    it('should be created', () => {
        const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
        expect(interceptor).toBeTruthy();
    });

    it('should route to not found page if API status is 400', fakeAsync(() => {
        produceApiError(400);

        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/not-found');
    }));

    it('should route to unauthorized page if API status is 401', fakeAsync(() => {
        produceApiError(401);

        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/unauthorized');
    }));
});
