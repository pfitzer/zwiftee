import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL = 'https://haveibeenpwned.com/api/v2';

    constructor(private httpClient: HttpClient) {
    }

    getBreaches() {
        return this.httpClient.get(`${this.API_URL}/breaches`);
    }

    getBreachedAccount(email) {
        return this.httpClient.get(`${this.API_URL}/breachedaccount/${email}`);
    }
}
