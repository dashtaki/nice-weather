import {Component} from '@angular/core';
import {ICurrentWeather} from '../../../interfaces/ICurrentWeather';
import {CurrentWeatherService} from '../../../services/current-weather/current-weather.service';
import {Router} from '@angular/router';
import {WeatherDetailHelperService} from '../../../helpers/weather-detail/weather-detail-helper.service';
import {ICoordination} from '../../../interfaces/ICoordination';

@Component({
    selector: 'app-cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
    public citiesWeather: ICurrentWeather[] = [];

    constructor(public currentWeatherService: CurrentWeatherService,
                public weatherDetailHelper: WeatherDetailHelperService,
                private router: Router) {
        this.getCitiesWeatherData();
    }

    private getCitiesWeatherData(): void {
        this.currentWeatherService.getCurrentWeather()
            .subscribe((weathers: ICurrentWeather[]) => this.citiesWeather = weathers);
    }

    public showHourlyForecast(coordination: ICoordination): void {
        const {lat, lon} = coordination;
        this.router.navigate(['/hourly'], {queryParams: {lat, lon}});
    }
}
