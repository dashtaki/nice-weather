import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CitiesListComponent} from './cities-list.component';
import {By} from '@angular/platform-browser';
import {CurrentWeatherService} from '../../../services/current-weather/current-weather.service';
import {of} from 'rxjs';
import {mockCurrentWeathers} from '../../../mock-data/current-weather-mock';
import {DebugElement} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {ICoordination} from '../../../interfaces/ICoordination';

describe('CitiesListComponent', () => {
    let component: CitiesListComponent;
    let fixture: ComponentFixture<CitiesListComponent>;
    let currentWeatherService;
    let mockRouter;

    beforeEach(async () => {
        currentWeatherService = jasmine.createSpyObj(['getCurrentWeather']);
        currentWeatherService.getCurrentWeather.and.returnValue(of(mockCurrentWeathers));
        mockRouter = jasmine.createSpyObj(['navigate']);

        await TestBed.configureTestingModule({
            declarations: [CitiesListComponent],
            imports: [RouterTestingModule],
            providers: [
                {provide: CurrentWeatherService, useValue: currentWeatherService},
                {provide: Router, useValue: mockRouter},
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CitiesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show list of cities', () => {
        const mainWrapper: DebugElement[] = fixture.debugElement.queryAll(By.css('.current-weather__wrapper ul li'));

        expect(mainWrapper.length).toBe(2);
    });

    it('should show city name', () => {
        const cityName: DebugElement = fixture.debugElement.query(By.css('.current-weather__city-name'));

        expect(cityName.nativeElement.textContent).toEqual('London');
    });

    it('should show weather icon', () => {
        const weatherIcon: DebugElement = fixture.debugElement.query(By.css('.current-weather__icon'));

        expect(weatherIcon.nativeElement.src).toEqual('http://openweathermap.org/img/wn/04n@4x.png');
    });

    it('should show weather Temperature', () => {
        const weatherTemp: DebugElement = fixture.debugElement.query(By.css('.current-weather__temp'));

        expect(weatherTemp.nativeElement.textContent).toContain('10 °C');
    });

    it('should show weather date and time', () => {
        const weatherDate: DebugElement = fixture.debugElement.query(By.css('.current-weather__time'));

        expect(weatherDate.nativeElement.textContent).toEqual('Mar 26, 2021, 12:36:25 AM');
    });

    it('should show weather status', () => {
        const weatherStatus: DebugElement = fixture.debugElement.query(By.css('p'));

        expect(weatherStatus.nativeElement.textContent).toContain('Clouds');
    });

    it('should show wind description', () => {
        const weatherDescription: DebugElement = fixture.debugElement.query(By.css('p'));

        expect(weatherDescription.nativeElement.textContent).toContain('broken clouds');
    });

    it('should show wind speed', () => {
        const windSpeed: DebugElement = fixture.debugElement.query(By.css('p:last-child'));

        expect(windSpeed.nativeElement.textContent).toContain('Wind: 4.63 m/s');
    });

    it('should show wind degree', () => {
        const windDegree: DebugElement = fixture.debugElement.query(By.css('p:last-child'));

        expect(windDegree.nativeElement.textContent).toContain('210');
    });

    it('should go to weather detail on click', () => {
        const expectedCoordination: ICoordination = {lon: -0.1257, lat: 51.5085};
        const currentWeather: DebugElement = fixture.debugElement.query(By.css('.current-weather__wrapper ul li:first-child'));
        currentWeather.triggerEventHandler('click', null);

        expect(mockRouter.navigate).toHaveBeenCalledWith(['/hourly'], {queryParams: expectedCoordination});
    });
});
