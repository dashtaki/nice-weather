import {IWeather} from './IWeather';

export interface IHourlyForecast {
    alerts: IAlert[];
    hourly: IHourData[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

interface IAlert {
    description: string;
    end: number;
    event: string;
    sender_name: string;
    start: number;
}

interface IHourData {
    clouds: number;
    dew_point: number;
    dt: null;
    feels_like: number;
    humidity: number;
    pop: number;
    pressure: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: IWeather[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
}
