import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '../../node_modules/@angular/common/http/testing';

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });

        service = TestBed.get(ApiService);
        httpMock = TestBed.get(HttpTestingController);
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

        const req = httpMock.expectOne('zwiftee://sessions');
        expect(req.request.method).toBe('GET');
        req.flush([{id: '1-1'}, {id: '1-2'}]);
        httpMock.verify();
    });

    it('should return one session', () => {
        service.getSession('1-1').subscribe((data: any) => {
            expect(data.id).toBe('1-1');
        });

        const req = httpMock.expectOne('zwiftee://session/1-1');
        expect(req.request.method).toBe('GET');
        req.flush({id: '1-1'});
        httpMock.verify();
    });
});
