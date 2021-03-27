import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HourlyForecastComponent} from './components/hourly-forecast/hourly-forecast.component';
import {AppRoutingModule} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HourlyForecastModule} from './components/hourly-forecast/hourly-forecast.module';
import {SharedModule} from './components/shared/shared.module';
import {ApiInterceptor} from './interceptors/api.interceptor';

const DECLARATIONS: any[] = [
    AppComponent,
    CitiesListComponent,
    HourlyForecastComponent,
];

const MODULES: any[] = [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    HourlyForecastModule,
    SharedModule
];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [...MODULES],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
