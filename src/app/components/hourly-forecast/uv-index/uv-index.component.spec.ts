import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UvIndexComponent} from './uv-index.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('UvIndexComponent', () => {
    let component: UvIndexComponent;
    let fixture: ComponentFixture<UvIndexComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UvIndexComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UvIndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show UV index icon', () => {
        const icon: DebugElement = fixture.debugElement.query(By.css('fa-icon'));

        expect(icon.nativeElement.icon.iconName).toEqual('umbrella-beach');
    });

    it('should show UV index', () => {
        component.uvIndex = 5;
        fixture.detectChanges();
        const uvIndex: DebugElement = fixture.debugElement.query(By.css('span'));

        expect(uvIndex.nativeElement.textContent).toContain('5');
    });
});
