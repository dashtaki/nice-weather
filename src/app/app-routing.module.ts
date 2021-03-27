import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { UnauthorizedComponent } from './components/shared/unauthorized/unauthorized.component';

const routes: Route[] = [
    {
        path: '',
        redirectTo: 'current',
        pathMatch: 'full',
    },
    {
        path: 'current',
        component: CitiesListComponent,
    },
    {
        path: 'hourly',
        loadChildren: () =>
            import('./components/hourly-forecast/hourly-forecast.module').then(
                (hourlyForecast) => hourlyForecast.HourlyForecastModule
            ),
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
