import { TestBed } from '@angular/core/testing';
import { CurrentWeatherService } from './current-weather.service';
import { TransportService } from '../transport.service';

describe('CurrentWeatherService', () => {
    let service: CurrentWeatherService;
    let mockTransportService;

    beforeEach(() => {
        mockTransportService = jasmine.createSpyObj(['Read']);

        TestBed.configureTestingModule({
            providers: [
                { provide: TransportService, useValue: mockTransportService },
            ],
        });
        service = TestBed.inject(CurrentWeatherService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all cities name', () => {
        const expectedCities: string[] = [
            'brussels',
            'tallinn',
            'amsterdam',
            'berlin',
            'paris',
        ];
        const actualCities = service.cities;

        expect(actualCities).toEqual(expectedCities);
    });

    it('should get weather data of a city', () => {
        service.getCurrentWeather();

        service.cities.forEach((city: string) => {
            expect(mockTransportService.Read).toHaveBeenCalledWith(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
            );
        });
    });
});
