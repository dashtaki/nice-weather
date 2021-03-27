import { Component, Input } from '@angular/core';
import { WeatherDetailHelperService } from '../../../helpers/weather-detail/weather-detail-helper.service';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() icon: string;
    @Input() weatherText: string;

    constructor(public weatherDetailHelper: WeatherDetailHelperService) {}
}
