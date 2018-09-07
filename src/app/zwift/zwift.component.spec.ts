import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ZwiftComponent} from './zwift.component';
import {ApiService} from '../api.service';
import {Sec2timePipe} from '../pipes/sec2time.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {ZwiftSessionComponent} from '../zwift-session/zwift-session.component';
import {WorkoutsComponent} from '../workouts/workouts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

describe('ZwiftComponent', () => {
    let component: ZwiftComponent;
    let fixture: ComponentFixture<ZwiftComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                NgxPaginationModule,
                HttpClientModule
            ],
            providers: [ApiService, {provide: APP_BASE_HREF, useValue: '/'}],
            declarations: [
                ZwiftComponent,
                Sec2timePipe,
                ZwiftSessionComponent,
                WorkoutsComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZwiftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
