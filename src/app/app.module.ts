import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HourlyWeatherComponent} from './components/hourly-weather/hourly-weather.component';
import {AppRoutingModule} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HumidityComponent} from './components/hourly-weather/humidity/humidity.component';
import {IconComponent} from './components/hourly-weather/icon/icon.component';
import {WindComponent} from './components/hourly-weather/wind/wind.component';
import {UvIndexComponent} from './components/hourly-weather/uv-index/uv-index.component';
import {FeelsLikeComponent} from './components/hourly-weather/feels-like/feels-like.component';
import {TemperatureComponent} from './components/hourly-weather/temperature/temperature.component';
import { TimeComponent } from './components/hourly-weather/time/time.component';

// TODO: component should move to module
const DECLARATIONS: any[] = [
    AppComponent,
    CitiesListComponent,
    HourlyWeatherComponent,
    HumidityComponent,
    IconComponent,
    WindComponent,
    UvIndexComponent,
    FeelsLikeComponent,
    TemperatureComponent
];

const MODULES: any[] = [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
];

@NgModule({
    declarations: [...DECLARATIONS, TimeComponent],
    imports: [...MODULES],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
