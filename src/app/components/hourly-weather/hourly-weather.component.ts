import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WeatherService} from '../../../services/weather/weather.service';
import {IHourlyForecast} from '../../../interfaces/IHourlyForecast';
import {WeatherDetailHelperService} from '../../helpers/weather-detail/weather-detail-helper.service';
import {ICoordination} from '../../../interfaces/ICoordination';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-hourly-weather',
    templateUrl: './hourly-weather.component.html',
    styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {
    public hourlyForecast: IHourlyForecast = null;
    public faChevronLeft = faChevronLeft;

    constructor(private route: ActivatedRoute,
                public weatherDetailHelper: WeatherDetailHelperService,
                private weatherService: WeatherService) {
        this.getCoordinationFromQueryParam();
    }

    private getCoordinationFromQueryParam(): void {
        this.route.queryParams
            .subscribe((param: Params) => {
                const lat = Number(param.lat);
                const lon = Number(param.lon);
                this.getHourlyWeatherData({lat, lon});
            });
    }

    private getHourlyWeatherData(coordination: ICoordination): void {
        this.weatherService.getHourlyWeatherByCityName(coordination)
            .subscribe((hourlyForecast: IHourlyForecast) => this.hourlyForecast = hourlyForecast);
    }

    public getCityNameFromTimeZone(timeZone: string): string {
        return timeZone.split('/')[1];
    }
}
