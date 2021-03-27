import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_KEY} from '../constants/ApiConstants';

@Injectable({
    providedIn: 'root'
})
export class TransportService {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get full url with appended API key
     *
     * @param url;
     * @returns string;
     */
    private urlMaker(url: string): string {
        return `${url}&appid=${API_KEY}`;
    }

    /**
     * verb GET
     * @param endpoint: string endpoint url
     * @return Observable<T>; modeled response from API
     */
    public Read<T>(endpoint: string): Observable<T> {
        const url: string = this.urlMaker(endpoint);
        return this.httpClient.get<T>(url);
    }
}
