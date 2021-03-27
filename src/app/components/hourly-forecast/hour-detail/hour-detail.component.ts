import {Component, Input} from '@angular/core';
import {IHourData} from '../../../../interfaces/IHourData';

@Component({
    selector: 'app-hour-detail',
    templateUrl: './hour-detail.component.html',
    styleUrls: ['./hour-detail.component.scss']
})
export class HourDetailComponent {
    @Input() hourDetail: IHourData[];
}
