import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertService} from './alert.service';

import {HttpClientTestingModule, HttpTestingController} from '../../node_modules/@angular/common/http/testing';
import {Routes} from '@angular/router';
import {ZwiftComponent} from './zwift/zwift.component';
import {Sec2timePipe} from './pipes/sec2time.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppComponent} from './app.component';
import {DebugElement} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AlertComponent} from './directives/alert/alert.component';
import {error} from 'util';
import {Alert} from './models/alert.model';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: ZwiftComponent
    }
];

describe('AlertService', () => {
    let service: AlertService;
    let httpMock: HttpTestingController;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ZwiftComponent, Sec2timePipe, AppComponent, HeaderComponent, AlertComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(routes),
                NgxPaginationModule
            ],
            providers: [AlertService, {provide: RouterTestingModule}]
        });

        service = TestBed.get(AlertService);
        httpMock = TestBed.get(HttpTestingController);
        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        const spy = spyOn(service, 'clear').and.callThrough();
        expect(spy).toHaveBeenCalledTimes(0);
    });
});
