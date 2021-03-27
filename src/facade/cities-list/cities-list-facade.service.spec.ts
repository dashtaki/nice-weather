import {TestBed} from '@angular/core/testing';
import {CitiesListFacadeService} from './cities-list-facade.service';

describe('CitiesListFacadeService', () => {
    let service: CitiesListFacadeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CitiesListFacadeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#CurrentWeatherService', () => {
        const spy: jasmine.Spy = spyOn<any>(service, 'currentWeatherServiceProxy');
        // tslint:disable-next-line:no-unused-expression
        service.currentWeatherService;

        expect(spy).toHaveBeenCalled();
    });

    it('#WeatherDetailHelperService', () => {
        const spy: jasmine.Spy = spyOn<any>(service, 'weatherDetailHelperProxy');
        // tslint:disable-next-line:no-unused-expression
        service.weatherDetailHelper;

        expect(spy).toHaveBeenCalled();
    });

    it('#SpinnerService', () => {
        const spy: jasmine.Spy = spyOn<any>(service, 'spinnerServiceProxy');
        // tslint:disable-next-line:no-unused-expression
        service.spinnerService;

        expect(spy).toHaveBeenCalled();
    });
});
