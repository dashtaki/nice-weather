import {Component} from '@angular/core';
import {SpinnerService} from '../services/spinner/spinner.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public spinnerService: SpinnerService) {
    }
}

// TODO: CSS: variable for colors
// TODO: Documentation
// TODO: api key should e=be get from BE
// TODO: supprt alert in forecast
// TODO: handle undefined coordination
// TODO: think about ng-containers
// TODO: lint
// TODO: test for interceptor
