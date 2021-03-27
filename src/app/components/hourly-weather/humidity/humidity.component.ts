import {Component, Input} from '@angular/core';
import {faTint} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-humidity',
    templateUrl: './humidity.component.html',
    styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent {
    public faTint = faTint;
    @Input() humidity: number;
}
