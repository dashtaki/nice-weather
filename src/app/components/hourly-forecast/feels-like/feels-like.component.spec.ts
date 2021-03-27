import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeelsLikeComponent } from './feels-like.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FeelsLikeComponent', () => {
    let component: FeelsLikeComponent;
    let fixture: ComponentFixture<FeelsLikeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeelsLikeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeelsLikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show feels kile icon', () => {
        const icon: DebugElement = fixture.debugElement.query(
            By.css('fa-icon')
        );

        expect(icon.nativeElement.icon.iconName).toEqual('thermometer-half');
    });

    it('should show feels like weather', () => {
        component.feelsLike = 12;
        const feelsLike: DebugElement = fixture.debugElement.query(
            By.css('span')
        );
        fixture.detectChanges();

        expect(feelsLike.nativeElement.textContent).toContain('12 °C');
    });
});
