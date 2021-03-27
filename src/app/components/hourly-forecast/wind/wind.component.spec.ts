import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WindComponent} from './wind.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('WindComponent', () => {
    let component: WindComponent;
    let fixture: ComponentFixture<WindComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WindComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WindComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
