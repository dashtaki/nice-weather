import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NotFoundComponent', () => {
    let component: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotFoundComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not found title', () => {
        const title: DebugElement = fixture.debugElement.query(By.css('h2'));

        expect(title.nativeElement.textContent).toContain(
            'Oops! The city not found!'
        );
    });

    it('should show warning icon', () => {
        const icon: DebugElement = fixture.debugElement.query(
            By.css('fa-icon')
        );

        expect(icon.nativeElement.icon.iconName).toEqual(
            'exclamation-triangle'
        );
    });

    it('should link text', () => {
        const linkTitle: DebugElement = fixture.debugElement.query(
            By.css('h5')
        );

        expect(linkTitle.nativeElement.textContent).toContain(
            'See cities list here!'
        );
    });

    it('should route to current on here on click', () => {
        const link: DebugElement = fixture.debugElement.query(By.css('a'));

        expect(link.nativeElement.getAttribute('routerLink')).toEqual(
            '/current'
        );
    });
});
