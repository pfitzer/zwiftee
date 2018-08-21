import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Session} from './zwift/models/session.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {
    }

    getSessions() {
        return this.httpClient.get(`${this.API_URL}/sessions`);
    }
}
