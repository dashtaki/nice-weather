import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HumidityComponent} from './humidity.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HumidityComponent', () => {
    let component: HumidityComponent;
    let fixture: ComponentFixture<HumidityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HumidityComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HumidityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show humidity icon', () => {
        const icon: DebugElement = fixture.debugElement.query(By.css('fa-icon'));

        expect(icon.nativeElement.icon.iconName).toEqual('tint');
    });

    it('should show humidity', () => {
        component.humidity = 15;
        const humidity: DebugElement = fixture.debugElement.query(By.css('strong'));
        fixture.detectChanges();

        expect(humidity.nativeElement.textContent).toContain('15 %');
    });
});
