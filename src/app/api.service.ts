import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Session} from './zwift/models/session.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getSessions(): Observable<Session[]> {
        return this.http.get<Session[]>(`${this.API_URL}/sessions`);
    }
}
