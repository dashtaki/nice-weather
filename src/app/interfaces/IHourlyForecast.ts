import { IHourData } from './IHourData';

export interface IHourlyForecast {
    alerts?: IAlert[];
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
