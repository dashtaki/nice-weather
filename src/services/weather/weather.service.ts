import {Injectable} from '@angular/core';
import {TransportService} from '../transport.service';
import {Observable} from 'rxjs';
import {IWeather} from '../../interfaces/IWeather';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private transportService: TransportService) {
    }

    /**
     * @returns string[]; list of cities name
     */
    public getCities(): string[] {
        return ['london', 'tallinn', 'amsterdam', 'berlin', 'paris'];
    }

    /**
     *
     * @param cityName: string city name
     * returns Observable<IWeather>; weather data of a city
     */
    public getCurrentWeather(cityName: string): Observable<IWeather> {
        const url: string = `?q=${cityName}`;
        return this.transportService.Read(url);
    }
}
