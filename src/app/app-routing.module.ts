import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CitiesListComponent} from './components/cities-list/cities-list.component';

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
        loadChildren: () => import('./components/hourly-weather/hourly-forecast.module')
            .then((hourlyForecast) => hourlyForecast.HourlyForecastModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
