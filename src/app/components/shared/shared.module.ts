import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';


const DECLARATIONS: any[] = [
    SpinnerComponent
];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [
        CommonModule
    ],
    exports: [...DECLARATIONS],
})

export class SharedModule {
}
