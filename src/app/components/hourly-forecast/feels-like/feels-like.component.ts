import {Component, Input} from '@angular/core';
import {faThermometerHalf} from '@fortawesome/free-solid-svg-icons';
import {WeatherDetailHelperService} from '../../../../helpers/weather-detail/weather-detail-helper.service';

@Component({
    selector: 'app-feels-like',
    templateUrl: './feels-like.component.html',
    styleUrls: ['./feels-like.component.scss']
})

export class FeelsLikeComponent {
    public faThermometerHalf = faThermometerHalf;
    @Input() feelsLike: number;

    constructor(public weatherDetailHelper: WeatherDetailHelperService) {
    }
}
