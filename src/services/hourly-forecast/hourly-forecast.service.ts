import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportService } from '../transport.service';
import { ICoordination } from '../../interfaces/ICoordination';
import { IHourlyForecast } from '../../interfaces/IHourlyForecast';

@Injectable({
    providedIn: 'root',
})
export class HourlyForecastService {
    constructor(private transportService: TransportService) {}

    /**
     * Get hourly forecast based on a city name
     * Unit is `metric`:
     *          wind speed is `meter/sec`
     *          temperature is `Celsius`
     *
     *
     * @param coordination: ICoordination;
     *
     * @returns Observable<IHourlyForecast>
     */
    public getHourlyForecastByCityName(
        coordination: ICoordination
    ): Observable<IHourlyForecast> {
        const { lat, lon } = coordination;
        const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,daily`;
        return this.transportService.Read(url);
    }
}
