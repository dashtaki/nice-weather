import { TestBed } from '@angular/core/testing';
import { HourlyForecastService } from './hourly-forecast.service';
import { TransportService } from '../transport.service';
import { ICoordination } from '../../../interfaces/ICoordination';

describe('HourlyForecastService', () => {
    let service: HourlyForecastService;
    let mockTransportService;

    beforeEach(() => {
        mockTransportService = jasmine.createSpyObj(['Read']);

        TestBed.configureTestingModule({
            providers: [
                { provide: TransportService, useValue: mockTransportService },
            ],
        });
        service = TestBed.inject(HourlyForecastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get hourly forecast based on city coordination', () => {
        const expectedUrl: string =
            'https://api.openweathermap.org/data/2.5/onecall?lat=12&lon=15&units=metric&exclude=current,minutely,daily';
        const coordination: ICoordination = { lat: 12, lon: 15 };
        service.getHourlyForecastByCityName(coordination);

        expect(mockTransportService.Read).toHaveBeenCalledOnceWith(expectedUrl);
    });
});
