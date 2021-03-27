import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TimeComponent} from './time.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('TimeComponent', () => {
    let component: TimeComponent;
    let fixture: ComponentFixture<TimeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show date time with right format', () => {
        component.unixTime = 1616846400;
        fixture.detectChanges();
        const time: DebugElement = fixture.debugElement.query(By.css('span'));

        expect(time.nativeElement.textContent).toContain('2:00 PM');
    });
});
