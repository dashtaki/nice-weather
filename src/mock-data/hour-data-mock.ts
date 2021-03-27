import { IHourData } from '../interfaces/IHourData';

export const mockHourData: IHourData[] = [
    {
        clouds: 75,
        dew_point: 3.11,
        dt: 1616853600,
        feels_like: 7.26,
        humidity: 54,
        pop: 0.02,
        pressure: 1028,
        temp: 12.13,
        uvi: 1.84,
        visibility: 10000,
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
            },
        ],
        wind_deg: 268,
        wind_gust: 7.56,
        wind_speed: 4.84,
    },
    {
        clouds: 98,
        dew_point: 3.03,
        dt: 1616868000,
        feels_like: 7.1,
        humidity: 59,
        pop: 0.02,
        pressure: 1028,
        temp: 10.71,
        uvi: 0,
        visibility: 10000,
        weather: [
            {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
            },
        ],
        wind_deg: 242,
        wind_gust: 5.77,
        wind_speed: 3.02,
    },
];
