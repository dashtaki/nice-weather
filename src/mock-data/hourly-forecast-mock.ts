import {IHourlyForecast} from '../app/interfaces/IHourlyForecast';

export const hourlyForecastMock: IHourlyForecast = {
    hourly: [
        {
            dt: 1616850000,
            temp: 11.53,
            feels_like: 6.39,
            pressure: 1027,
            humidity: 57,
            dew_point: 3.31,
            clouds: 0,
            pop: 0,
            uvi: 2,
            visibility: 100,
            weather: [
                {
                    id: 1,
                    main: 'Cloud',
                    description: 'sky',
                    icon: '',
                },
            ],
            wind_deg: 25,
            wind_gust: 12,
            wind_speed: 78,
        },
    ],
    lat: 48.8534,
    lon: 2.3488,
    timezone: 'Europe/Paris',
    timezone_offset: 3600,
};
