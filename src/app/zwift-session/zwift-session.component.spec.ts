import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ZwiftSessionComponent} from './zwift-session.component';
import {ApiService} from '../api.service';
import {Sec2timePipe} from '../pipes/sec2time.pipe';
import {AppRoutingModule} from '../app-routing.module';
import {ZwiftComponent} from '../zwift/zwift.component';
import {PreferencesComponent} from '../preferences/preferences.component';
import {WorkoutsComponent} from '../workouts/workouts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

describe('ZwiftSessionComponent', () => {
    let component: ZwiftSessionComponent;
    let fixture: ComponentFixture<ZwiftSessionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                NgxPaginationModule,
                HttpClientModule
            ],
            declarations: [
                ZwiftSessionComponent,
                ZwiftComponent,
                Sec2timePipe,
                PreferencesComponent,
                ZwiftSessionComponent,
                WorkoutsComponent
            ],
            providers: [ApiService, {provide: APP_BASE_HREF, useValue: '/'}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZwiftSessionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
