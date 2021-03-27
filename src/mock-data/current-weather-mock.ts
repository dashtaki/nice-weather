import { ICurrentWeather } from '../interfaces/ICurrentWeather';

export const mockCurrentWeathers: ICurrentWeather[] = [
    {
        coord: { lon: -0.1257, lat: 51.5085 },
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
            },
        ],
        base: 'stations',
        main: {
            temp: 9.56,
            feels_like: 5.74,
            temp_min: 8.89,
            temp_max: 10,
            pressure: 1016,
            humidity: 87,
        },
        visibility: 10000,
        wind: { speed: 4.63, deg: 210 },
        clouds: { all: 75 },
        dt: 1616711785,
        sys: {
            type: 1,
            id: 1414,
            country: 'GB',
            sunrise: 1616651489,
            sunset: 1616696474,
        },
        timezone: 0,
        id: 2643743,
        name: 'London',
        cod: 200,
    },
    {
        coord: { lon: -0.1257, lat: 51.5085 },
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
            },
        ],
        base: 'stations',
        main: {
            temp: 9.56,
            feels_like: 5.74,
            temp_min: 8.89,
            temp_max: 10,
            pressure: 1016,
            humidity: 87,
        },
        visibility: 10000,
        wind: { speed: 4.63, deg: 210 },
        clouds: { all: 75 },
        dt: 1616711785,
        sys: {
            type: 1,
            id: 1414,
            country: 'GB',
            sunrise: 1616651489,
            sunset: 1616696474,
        },
        timezone: 0,
        id: 2643743,
        name: 'Tallinn',
        cod: 200,
    },
];
