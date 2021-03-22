import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransportService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * @param endpoint: string endpoint url
     * @returns string full url
     */
    private urlMaker(endpoint: string): string {
        return environment.api + endpoint;
    }

    /**
     * verb GET
     * @param endpoint: string endpoint url
     * @return Observable<T> modeled response from API
     */
    public Read<T>(endpoint: string): Observable<T> {
        const url: string = this.urlMaker(endpoint);
        return this.httpClient.get<T>(url);
    }
}
