import { Component, Input } from '@angular/core';
import { WeatherDetailHelperService } from '../../../../helpers/weather-detail/weather-detail-helper.service';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent {
    @Input() temperature: number;

    constructor(public weatherDetailHelper: WeatherDetailHelperService) {}
}
