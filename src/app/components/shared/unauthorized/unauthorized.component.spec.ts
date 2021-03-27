import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnauthorizedComponent } from './unauthorized.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UnauthorizedComponent', () => {
    let component: UnauthorizedComponent;
    let fixture: ComponentFixture<UnauthorizedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UnauthorizedComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UnauthorizedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show warning icon', () => {
        const icon: DebugElement = fixture.debugElement.query(
            By.css('fa-icon')
        );

        expect(icon.nativeElement.icon.iconName).toEqual(
            'exclamation-triangle'
        );
    });

    it('should main title', () => {
        const mainTitle: DebugElement = fixture.debugElement.query(
            By.css('h2')
        );

        expect(mainTitle.nativeElement.textContent).toContain(
            'Your API key s invalid!'
        );
    });

    it('should show description', () => {
        const description: DebugElement = fixture.debugElement.query(
            By.css('h5')
        );

        expect(description.nativeElement.textContent).toContain(
            'You can find out here how to make an API key here and  main page'
        );
    });

    it('should open new tab for create API key', () => {
        const link: DebugElement = fixture.debugElement.query(By.css('a'));

        expect(link.nativeElement.getAttribute('href')).toEqual(
            'https://openweathermap.org/api/one-call-api#history-how'
        );
        expect(link.nativeElement.getAttribute('target')).toEqual('_blank');
    });

    it('should route to current on here on click', () => {
        const link: DebugElement = fixture.debugElement.queryAll(
            By.css('a')
        )[1];

        expect(link.nativeElement.getAttribute('routerLink')).toEqual(
            '/current'
        );
    });
});
