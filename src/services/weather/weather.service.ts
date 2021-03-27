import {Injectable} from '@angular/core';
import {TransportService} from '../transport.service';
import {combineLatest, Observable} from 'rxjs';
import {ICurrentWeather} from '../../interfaces/ICurrentWeather';
import {IHourlyForecast} from '../../interfaces/IHourlyForecast';
import {ICoordination} from '../../interfaces/ICoordination';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private transportService: TransportService) {
    }

    /**
     * Get list of cities name
     *
     * @returns string[]
     */
    get cities(): string[] {
        return ['tehran', 'tallinn', 'amsterdam', 'berlin', 'paris'];
    }

    /**
     * Call weather API for getting current weather of all the cities
     * Unit is `metric`:
     *          wind speed is `meter/sec`
     *          temperature is `Celsius`
     *
     * @see [Current Weather Data](https://openweathermap.org/current#data)
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

    /**
     * Get hourly forecast based on a city name
     * Unit is `metric`:
     *          wind speed is `meter/sec`
     *          temperature is `Celsius`
     * @see [Hourly Forecast](https://openweathermap.org/api/hourly-forecast)
     *
     * @param coordination: ICoordination;
     *
     * @returns Observable<IHourlyForecast>
     */
    public getHourlyForecastByCityName(coordination: ICoordination): Observable<IHourlyForecast> {
        const {lat, lon} = coordination;
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,daily`;
        return this.transportService.Read(url);
    }
}
