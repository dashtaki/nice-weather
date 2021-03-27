import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HourDetailComponent} from './hour-detail.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {mockHourData} from '../../../../mock-data/hour-data-mock';

describe('HourDetailComponent', () => {
    let component: HourDetailComponent;
    let fixture: ComponentFixture<HourDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HourDetailComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HourDetailComponent);
        component = fixture.componentInstance;
        component.hourDetail = mockHourData;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show all hourly forecast list', () => {
        const allHours: DebugElement[] = fixture.debugElement.queryAll(By.css('.row'));

        expect(allHours.length).toBe(2);
    });

    it('should call TimeComponent with unit time', () => {
        const TimeComponent: DebugElement = fixture.debugElement.query(By.css('app-time'));

        expect(TimeComponent.nativeElement.unixTime).toEqual(1616853600);
    });

    it('should call TemperatureComponent with temperature', () => {
        const TemperatureComponent: DebugElement = fixture.debugElement.query(By.css('app-temperature'));

        expect(TemperatureComponent.nativeElement.temperature).toEqual(12.13);
    });

    it('should call IconComponent with icon data', () => {
        const IconComponent: DebugElement = fixture.debugElement.query(By.css('app-icon'));

        expect(IconComponent.nativeElement.icon).toEqual('04d');
        expect(IconComponent.nativeElement.weatherText).toEqual('Clouds');
    });

    it('should call HumidityComponent with humidity', () => {
        const HumidityComponent: DebugElement = fixture.debugElement.query(By.css('app-humidity'));

        expect(HumidityComponent.nativeElement.humidity).toEqual(54);
    });

    it('should call FeelsLikeComponent with feels like', () => {
        const FeelsLikeComponent: DebugElement = fixture.debugElement.query(By.css('app-feels-like'));

        expect(FeelsLikeComponent.nativeElement.feelsLike).toEqual(7.26);
    });

    it('should call WindComponent with wind data', () => {
        const WindComponent: DebugElement = fixture.debugElement.query(By.css('app-wind'));

        expect(WindComponent.nativeElement.windSpeed).toEqual(4.84);
        expect(WindComponent.nativeElement.windDegree).toEqual(268);
    });

    it('should call UvIndexComponent with wind data', () => {
        const UvIndexComponent: DebugElement = fixture.debugElement.query(By.css('app-uv-index'));

        expect(UvIndexComponent.nativeElement.uvIndex).toEqual(1.84);
    });

    it('should show weather description', () => {
        const weatherDescription: DebugElement = fixture.debugElement.query(By.css('.weather__description'));

        expect(weatherDescription.nativeElement.textContent).toContain('broken clouds');
    });
});
