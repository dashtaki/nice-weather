import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HourlyForecastComponent} from './hourly-forecast.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {hourlyForecastMock} from '../../../mock-data/hourly-forecast-mock';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {ICoordination} from '../../../interfaces/ICoordination';
import {By} from '@angular/platform-browser';
import {HourlyForecastService} from '../../../services/hourly-forecast/hourly-forecast.service';

describe('HourlyForecastComponent', () => {
    let component: HourlyForecastComponent;
    let fixture: ComponentFixture<HourlyForecastComponent>;
    let mockActivatedRoute;
    let hourlyForecastService;

    beforeEach(async () => {
        mockActivatedRoute = jasmine.createSpyObj(['queryParams']);
        mockActivatedRoute.queryParams = of({lat: 12, lon: 13});

        hourlyForecastService = jasmine.createSpyObj(['getHourlyForecastByCityName']);
        hourlyForecastService.getHourlyForecastByCityName.and.returnValue(of(hourlyForecastMock));

        await TestBed.configureTestingModule({
            declarations: [HourlyForecastComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: HourlyForecastService, useValue: hourlyForecastService},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HourlyForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get hourly forecast of a city based on the coordination on component construction', () => {
        const expectedCoordination: ICoordination = {lat: 12, lon: 13};

        expect(hourlyForecastService.getHourlyForecastByCityName).toHaveBeenCalledWith(expectedCoordination);
    });

    it('should return if timezone is null', () => {
        const actualCityName: string = component.getCityNameFromTimeZone(null);

        expect(actualCityName).toBeUndefined();
    });

    it('should get city name based on timezone', () => {
        const actualCityName: string = component.getCityNameFromTimeZone('Asia/Tehran');

        expect(actualCityName).toEqual('Tehran');
    });

    it('should show main title', () => {
        const mainTitle: DebugElement = fixture.debugElement.query(By.css('h3'));

        expect(mainTitle.nativeElement.textContent).toContain('Hourly Forecast -');
    });

    it('should show city name', () => {
        const cityName: DebugElement = fixture.debugElement.query(By.css('h5'));

        expect(cityName.nativeElement.textContent).toContain('Paris');
    });

    it('should show date', () => {
        const date: DebugElement = fixture.debugElement.query(By.css('.forecast__date'));

        expect(date.nativeElement.textContent).toContain('Saturday, March 27');
    });

    it('should go back to current weathers page on back button click', () => {
        const backButton: DebugElement = fixture.debugElement.query(By.css('a'));

        expect(backButton.nativeElement.getAttribute('routerlink')).toEqual('/current');
    });

    it('should show back button icon', () => {
        const icon: DebugElement = fixture.debugElement.query(By.css('fa-icon'));

        expect(icon.nativeElement.icon.iconName).toEqual('chevron-left');
    });
});
