import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { SpinnerService } from '../services/spinner/spinner.service';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let mockSpinnerService;

    beforeEach(async () => {
        mockSpinnerService = jasmine.createSpyObj(['loading']);

        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: SpinnerService, useValue: mockSpinnerService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should show spinner', () => {
        mockSpinnerService.loading = true;
        fixture.detectChanges();
        const spinner: DebugElement = fixture.debugElement.query(
            By.css('app-spinner')
        );

        expect(spinner).toBeTruthy();
    });
});
