import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HumidityComponent} from './humidity/humidity.component';
import {IconComponent} from './icon/icon.component';
import {WindComponent} from './wind/wind.component';
import {UvIndexComponent} from './uv-index/uv-index.component';
import {FeelsLikeComponent} from './feels-like/feels-like.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {TimeComponent} from './time/time.component';
import {RouterModule, Routes} from '@angular/router';
import {HourlyWeatherComponent} from './hourly-weather.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routes: Routes = [
    {
        path: '',
        component: HourlyWeatherComponent
    }
];

const DECLARATIONS: any[] = [
    HumidityComponent,
    IconComponent,
    WindComponent,
    UvIndexComponent,
    FeelsLikeComponent,
    TemperatureComponent,
    TimeComponent
];

@NgModule({
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(routes)
    ]
})
export class HourlyForecastModule {
}
