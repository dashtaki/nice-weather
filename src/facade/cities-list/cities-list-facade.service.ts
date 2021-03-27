import { Injectable, Injector } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather/current-weather.service';
import { WeatherDetailHelperService } from '../../helpers/weather-detail/weather-detail-helper.service';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Injectable({
    providedIn: 'root',
})
export class CitiesListFacadeService {
    private _currentWeatherService: CurrentWeatherService;
    private _weatherDetailHelper: WeatherDetailHelperService;
    private _spinnerService: SpinnerService;

    get currentWeatherService(): CurrentWeatherService {
        this.currentWeatherServiceProxy();
        return this._currentWeatherService;
    }

    private currentWeatherServiceProxy(): void {
        if (!this._currentWeatherService) {
            this._currentWeatherService = this.injector.get(
                CurrentWeatherService
            );
        }
    }

    get weatherDetailHelper(): WeatherDetailHelperService {
        this.weatherDetailHelperProxy();
        return this._weatherDetailHelper;
    }

    private weatherDetailHelperProxy(): void {
        if (!this._weatherDetailHelper) {
            this._weatherDetailHelper = this.injector.get(
                WeatherDetailHelperService
            );
        }
    }

    get spinnerService(): SpinnerService {
        this.spinnerServiceProxy();
        return this._spinnerService;
    }

    private spinnerServiceProxy(): void {
        if (!this._spinnerService) {
            this._spinnerService = this.injector.get(SpinnerService);
        }
    }

    constructor(private injector: Injector) {}
}
