import {TestBed, inject} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '../../node_modules/@angular/common/http/testing';
import {PreferencesModel} from './models/preferences.model';

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;
    let preferences: PreferencesModel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService, PreferencesModel]
        });

        service = TestBed.get(ApiService);
        httpMock = TestBed.get(HttpTestingController);
        preferences = TestBed.get(PreferencesModel);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the sessions', () => {
        service.getSessions().subscribe((data: any) => {
            expect(data.length).toBe(2);
            expect(data[0].id).toBe('1-1');
            expect(data[1].id).toBe('1-2');
        });

        const req = httpMock.expectOne('http://localhost:3000/sessions');
        expect(req.request.method).toBe('GET');
        req.flush([{id: '1-1'}, {id: '1-2'}]);
        httpMock.verify();
    });

    it('should return one session', () => {
        service.getSession('1-1').subscribe((data: any) => {
            expect(data.id).toBe('1-1');
        });

        const req = httpMock.expectOne('http://localhost:3000/session/1-1');
        expect(req.request.method).toBe('GET');
        req.flush({id: '1-1'});
        httpMock.verify();
    });

    it('should return the preferences', () => {
        service.getPreferences().subscribe((data: any) => {
            expect(data.locale).toBe('de');
        });

        const req = httpMock.expectOne('http://localhost:3000/preferences');
        expect(req.request.method).toBe('GET');
        req.flush({locale: 'de'});
        httpMock.verify();
    });

    it('should return send preferences', () => {
        const prefs: PreferencesModel = preferences.deserialize({locale: 'de', units: 'metric'});
        service.savePreferences(prefs).subscribe((data: any) => {
            expect(data.locale).toBe('de');
        });

        const req = httpMock.expectOne('http://localhost:3000/preferences');
        expect(req.request.method).toBe('POST');
        req.flush(prefs);
        httpMock.verify();
    });
});
