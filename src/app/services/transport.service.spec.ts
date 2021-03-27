import { TestBed } from '@angular/core/testing';
import { TransportService } from './transport.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { API_KEY } from '../../constants/ApiConstants';

describe('TransportService', () => {
    let service: TransportService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(TransportService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call api for get data', () => {
        const endPoint: string = '/mock-end-point';
        const expectedEndpoint: string = `/mock-end-point&appid=${API_KEY}`;
        service.Read(endPoint).subscribe();
        const mockReq = httpTestingController.expectOne(expectedEndpoint);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpTestingController.verify();
    });
});
