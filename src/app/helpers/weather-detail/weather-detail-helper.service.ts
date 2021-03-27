import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WeatherDetailHelperService {

    public ceilingNumber(temp: number): number {
        return Math.ceil(temp);
    }

    public makeWeatherIconSrc(icon: string): string {
        return `http://openweathermap.org/img/wn/${icon}@4x.png`;
    }
}
