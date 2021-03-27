import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TemperatureComponent} from './temperature.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('TemperatureComponent', () => {
    let component: TemperatureComponent;
    let fixture: ComponentFixture<TemperatureComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TemperatureComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TemperatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should show temperature', () => {
        component.temperature = 18;
        fixture.detectChanges();
        const temperature: DebugElement = fixture.debugElement.query(By.css('span'));

        expect(temperature.nativeElement.textContent).toContain('18');
    });

    it('should show degree symbol', () => {
        const degreeSymbol: DebugElement = fixture.debugElement.queryAll(By.css('span'))[1];

        expect(degreeSymbol.nativeElement.textContent).toContain('°C');
    });
});
