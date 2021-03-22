import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';

const DECLARATIONS = [
    AppComponent,
    CitiesListComponent
];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
