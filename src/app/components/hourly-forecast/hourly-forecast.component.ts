import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {SpinnerService} from '../../services/spinner/spinner.service';
import {HourlyForecastService} from '../../services/hourly-forecast/hourly-forecast.service';
import {IHourlyForecast} from '../../interfaces/IHourlyForecast';
import {ICoordination} from '../../interfaces/ICoordination';

@Component({
    selector: 'app-hourly-forecast',
    templateUrl: './hourly-forecast.component.html',
    styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent {
    public hourlyForecast: IHourlyForecast = null;
    public faChevronLeft = faChevronLeft;

    constructor(
        private route: ActivatedRoute,
        public spinnerService: SpinnerService,
        private hourlyForecastService: HourlyForecastService
    ) {
        this.getCoordinationFromQueryParam();
    }

    private getCoordinationFromQueryParam(): void {
        this.route.queryParams.subscribe((param: Params) => {
            const lat = Number(param.lat);
            const lon = Number(param.lon);
            this.getHourlyForecastData({ lat, lon });
        });
    }

    private getHourlyForecastData(coordination: ICoordination): void {
        this.spinnerService.loading = true;
        this.hourlyForecastService
            .getHourlyForecastByCityName(coordination)
            .subscribe(
                (hourlyForecast: IHourlyForecast) => {
                    this.hourlyForecast = hourlyForecast;
                    this.spinnerService.loading = false;
                },
                (_) => (this.spinnerService.loading = false)
            );
    }

    public getCityNameFromTimeZone(timeZone: string): string {
        if (!timeZone) {
            return;
        }

        return timeZone.split('/')[1];
    }
}
