import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Session} from './models/session.model';
import {PreferencesModel} from './models/preferences.model';
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

    getSession(id) {
        return this.http.get(`${this.API_URL}/session/` + id);
    }

    getPreferences() {
        return this.http.get<PreferencesModel>(`${this.API_URL}/preferences`);
    }

    savePreferences(data: PreferencesModel) {
        return this.http.post(`${this.API_URL}/preferences`, data);
    }
}
