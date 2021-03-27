import { Component } from '@angular/core';
import { ICurrentWeather } from '../../../interfaces/ICurrentWeather';
import { Router } from '@angular/router';
import { ICoordination } from '../../../interfaces/ICoordination';
import { CitiesListFacadeService } from '../../../facade/cities-list/cities-list-facade.service';

@Component({
    selector: 'app-cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.scss'],
})
export class CitiesListComponent {
    public citiesWeather: ICurrentWeather[] = [];

    constructor(
        public citiesListFacadeService: CitiesListFacadeService,
        private router: Router
    ) {
        this.getCitiesWeatherData();
    }

    private getCitiesWeatherData(): void {
        this.citiesListFacadeService.spinnerService.loading = true;
        this.citiesListFacadeService.currentWeatherService
            .getCurrentWeather()
            .subscribe(
                (weathers: ICurrentWeather[]) => {
                    this.citiesWeather = weathers;
                    this.citiesListFacadeService.spinnerService.loading = false;
                },
                (_) =>
                    (this.citiesListFacadeService.spinnerService.loading = false)
            );
    }

    public showHourlyForecast(coordination: ICoordination): void {
        const { lat, lon } = coordination;
        this.router.navigate(['/hourly'], { queryParams: { lat, lon } });
    }
}
