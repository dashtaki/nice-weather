import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

const DECLARATIONS: any[] = [
    AppComponent,
    CitiesListComponent
];

const MODULES: any[] = [
    BrowserModule,
    CommonModule,
    HttpClientModule,
];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [...MODULES],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
