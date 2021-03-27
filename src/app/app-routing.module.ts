import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {HourlyWeatherComponent} from './components/hourly-weather/hourly-weather.component';


const routes: Route[] = [
    {
        path: '',
        redirectTo: 'current',
        pathMatch: 'full'
    },
    {
        path: 'current',
        component: CitiesListComponent
    },
    {
        path: 'hourly',
        component: HourlyWeatherComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
