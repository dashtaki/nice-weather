import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IconComponent} from './icon.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should weather icon image', () => {
        component.icon = '04d';
        fixture.detectChanges();
        const icon: DebugElement = fixture.debugElement.query(By.css('img'));

        expect(icon.nativeElement.src).toEqual('http://openweathermap.org/img/wn/04d@4x.png');
    });

    it('should show weather main title', () => {
        component.weatherText = 'mock-weather-title';
        fixture.detectChanges();
        const weatherTitle: DebugElement = fixture.debugElement.query(By.css('span'));

        expect(weatherTitle.nativeElement.textContent).toContain('mock-weather-title');
    });
});
