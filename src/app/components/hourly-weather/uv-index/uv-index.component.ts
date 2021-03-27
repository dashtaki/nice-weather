import {Component, Input} from '@angular/core';
import {faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-uv-index',
    templateUrl: './uv-index.component.html',
    styleUrls: ['./uv-index.component.scss']
})
export class UvIndexComponent {
    public faUmbrellaBeach = faUmbrellaBeach;
    @Input() uvIndex: number;

    constructor() {
    }
}
