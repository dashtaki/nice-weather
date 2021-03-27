import { Injectable } from '@angular/core';
import { TransportService } from '../transport.service';
import { combineLatest, Observable } from 'rxjs';
import {ICurrentWeather} from '../../interfaces/ICurrentWeather';

@Injectable({
    providedIn: 'root',
})
export class CurrentWeatherService {
    constructor(private transportService: TransportService) {}

    /**
     * Get list of cities name
     *
     * @returns string[]
     */
    get cities(): string[] {
        return ['brussels', 'tallinn', 'amsterdam', 'berlin', 'paris'];
    }

    /**
     * Call weather API for getting current weather of all the cities
     * Unit is `metric`:
     *          wind speed is `meter/sec`
     *          temperature is `Celsius`
     *
     *
     * @returns Observable<ICurrentWeather>; list of current weather of the cities
     */
    public getCurrentWeather(): Observable<ICurrentWeather[]> {
        const citiesData$: Observable<ICurrentWeather>[] = [];
        this.cities.forEach((city: string) => {
            const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
            citiesData$.push(this.transportService.Read<ICurrentWeather>(url));
        });

        return combineLatest(citiesData$);
    }
}
