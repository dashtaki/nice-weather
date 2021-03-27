import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WeatherService} from '../../../services/weather/weather.service';
import {IHourlyForecast} from '../../../interfaces/IHourlyForecast';
import {WeatherDetailHelperService} from '../../helpers/weather-detail/weather-detail-helper.service';
import {ICoordination} from '../../../interfaces/ICoordination';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-hourly-forecast',
    templateUrl: './hourly-forecast.component.html',
    styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent {
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
                this.getHourlyForecastData({lat, lon});
            });
    }

    private getHourlyForecastData(coordination: ICoordination): void {
        this.weatherService.getHourlyForecastByCityName(coordination)
            .subscribe((hourlyForecast: IHourlyForecast) => this.hourlyForecast = hourlyForecast);
    }

    public getCityNameFromTimeZone(timeZone: string): string {
        if (!timeZone) {
            return;
        }

        return timeZone.split('/')[1];
    }
}