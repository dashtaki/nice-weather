import {Injectable} from '@angular/core';
import {TransportService} from '../transport.service';
import {combineLatest, Observable} from 'rxjs';
import {ICurrentWeather} from '../../interfaces/ICurrentWeather';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private transportService: TransportService) {
    }

    /**
     * @returns string[]; list of cities name
     */
    get cities(): string[] {
        return ['london', 'tallinn', 'amsterdam', 'berlin', 'paris'];
    }

    /**
     * Call weather API for getting current weather of the cities
     * Unit is `metric`:
     *          wind speed is `meter/sec`
     *          temperature is `Celsius`
     *
     * * @see [Current Weather Data](https://openweathermap.org/current#data)
     *
     * @returns Observable<ICurrentWeather>; list of current weather of the cities
     */
    public getCurrentWeather(): Observable<ICurrentWeather[]> {
        const citiesData$: Observable<ICurrentWeather>[] = [];
        this.cities.forEach((city: string) => {
            const url: string = `?q=${city}&units=metric`;
            citiesData$.push(this.transportService.Read<ICurrentWeather>(url));
        });

        return combineLatest(citiesData$);
    }
}
