import { IWeather } from './IWeather';
import { ICoordination } from './ICoordination';

export interface ICurrentWeather {
    coord: ICoordination;
    weather: IWeather[];
    base: string;
    main: IMain;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone?: number;
    id: number;
    name: string;
    cod: number;
}

interface ISys {
    type: number;
    id: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
}

interface IMain {
    temp: number;
    feels_like?: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
    temp_kf?: number;
}

interface IWind {
    speed: number;
    deg: number;
}

interface IClouds {
    all: number;
}
