import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    private _loading: boolean = false;

    get loading(): boolean {
        return this._loading;
    }

    set loading(loading: boolean) {
        this._loading = loading;
    }
}
