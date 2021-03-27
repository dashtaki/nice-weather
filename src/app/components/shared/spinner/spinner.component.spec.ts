import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpinnerComponent} from './spinner.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('SpinnerComponent', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SpinnerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should spinner', () => {
        const spinner: DebugElement = fixture.debugElement.query(By.css('#global-spinner'));

        expect(spinner).toBeTruthy();
    });
});
