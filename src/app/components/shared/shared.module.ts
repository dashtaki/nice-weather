import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';

const DECLARATIONS: any[] = [
    SpinnerComponent,
    UnauthorizedComponent,
    NotFoundComponent,
];

const MODULES: any[] = [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [...MODULES],
    exports: [...DECLARATIONS],
})

export class SharedModule {
}
