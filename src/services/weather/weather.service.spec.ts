import {TestBed} from '@angular/core/testing';
import {WeatherService} from './weather.service';
import {TransportService} from '../transport.service';

describe('WeatherService', () => {
    let service: WeatherService;
    let mockTransportService;

    beforeEach(() => {
        mockTransportService = jasmine.createSpyObj(['Read']);

        TestBed.configureTestingModule({
            providers: [{provide: TransportService, useValue: mockTransportService}]
        });
        service = TestBed.inject(WeatherService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all cities name', () => {
        const expectedCities: string[] = ['london', 'tallinn', 'amsterdam', 'berlin', 'paris'];
        const actualCities = service.getCities();

        expect(actualCities).toEqual(expectedCities);
    });

    it('should get weather data of a city', () => {
        const cityName: string = 'warsaw';
        service.getCurrentWeather(cityName);

        expect(mockTransportService.Read).toHaveBeenCalledOnceWith(`?q=${cityName}`);
    });
});
