import {Component} from '@angular/core';
import {ICurrentWeather} from '../../../interfaces/ICurrentWeather';
import {WeatherService} from '../../../services/weather/weather.service';
import {Router} from '@angular/router';
import {WeatherDetailHelperService} from '../../helpers/weather-detail/weather-detail-helper.service';
import {ICoordination} from '../../../interfaces/ICoordination';

@Component({
    selector: 'app-cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
    public citiesWeather: ICurrentWeather[] = [];

    constructor(public weatherService: WeatherService,
                public weatherDetailHelper: WeatherDetailHelperService,
                private router: Router) {
        this.getCitiesWeatherData();
    }

    private getCitiesWeatherData(): void {
        this.weatherService.getCurrentWeather()
            .subscribe((weathers: ICurrentWeather[]) => this.citiesWeather = weathers);
    }

    public showHourlyForecast(coordination: ICoordination): void {
        const {lat, lon} = coordination;
        this.router.navigate(['/hourly'], {queryParams: {lat, lon}});
    }
}
