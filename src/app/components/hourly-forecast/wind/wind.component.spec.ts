import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindComponent } from './wind.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WindComponent', () => {
    let component: WindComponent;
    let fixture: ComponentFixture<WindComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WindComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WindComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show wind icon', () => {
        const icon: DebugElement = fixture.debugElement.query(
            By.css('fa-icon')
        );

        expect(icon.nativeElement.icon.iconName).toEqual('wind');
    });

    it('should show wind speed', () => {
        component.windSpeed = 78;
        fixture.detectChanges();
        const windSpeed: DebugElement = fixture.debugElement.query(
            By.css('span')
        );

        expect(windSpeed.nativeElement.textContent).toContain('78 m/s');
    });

    it('should show wind degrre', () => {
        component.windDegree = 12;
        fixture.detectChanges();
        const windDegree: DebugElement = fixture.debugElement.queryAll(
            By.css('span')
        )[1];

        expect(windDegree.nativeElement.textContent).toContain('12 °');
    });
});
