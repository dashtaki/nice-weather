import {Component, Input} from '@angular/core';
import {faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons';
import {WeatherDetailHelperService} from '../../../../helpers/weather-detail/weather-detail-helper.service';

@Component({
    selector: 'app-uv-index',
    templateUrl: './uv-index.component.html',
    styleUrls: ['./uv-index.component.scss']
})
export class UvIndexComponent {
    public faUmbrellaBeach = faUmbrellaBeach;
    @Input() uvIndex: number;

    constructor(public weatherDetailHelper: WeatherDetailHelperService) {
    }
}
