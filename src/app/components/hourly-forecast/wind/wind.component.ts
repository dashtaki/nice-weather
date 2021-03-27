import {Component, Input} from '@angular/core';
import {faWind} from '@fortawesome/free-solid-svg-icons';
import {WeatherDetailHelperService} from '../../../../helpers/weather-detail/weather-detail-helper.service';

@Component({
    selector: 'app-wind',
    templateUrl: './wind.component.html',
    styleUrls: ['./wind.component.scss']
})
export class WindComponent {
    public faWind = faWind;
    @Input() windDegree: number;
    @Input() windSpeed: number;

    constructor(public weatherDetailHelper: WeatherDetailHelperService) {
    }
}
