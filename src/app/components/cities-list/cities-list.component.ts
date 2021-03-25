import {Component} from '@angular/core';
import {ICurrentWeather} from '../../../interfaces/ICurrentWeather';
import {WeatherService} from '../../../services/weather/weather.service';

@Component({
    selector: 'app-cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
    public citiesWeather: ICurrentWeather[] = [];

    constructor(public weatherService: WeatherService) {
        this.getCitiesWeatherData();
    }

    private getCitiesWeatherData(): void {
        this.weatherService.getCurrentWeather()
            .subscribe((weathers: ICurrentWeather[]) => this.citiesWeather = weathers);
    }

    public makeWeatherIconSrc(icon: string): string {
        return `http://openweathermap.org/img/wn/${icon}@4x.png`;
    }

    public ceilingTemperature(temp: number): number {
        return Math.ceil(temp);
    }
}
