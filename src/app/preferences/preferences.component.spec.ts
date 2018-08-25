import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreferencesComponent} from './preferences.component';
import {ApiService} from '../api.service';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AlertService} from '../alert.service';
import {AppRoutingModule} from '../app-routing.module';
import {ZwiftComponent} from '../zwift/zwift.component';
import {ZwiftSessionComponent} from '../zwift-session/zwift-session.component';
import {WorkoutsComponent} from '../workouts/workouts.component';
import {Sec2timePipe} from '../pipes/sec2time.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

describe('PreferencesComponent', () => {
    let component: PreferencesComponent;
    let fixture: ComponentFixture<PreferencesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                AppRoutingModule,
                NgxPaginationModule
            ],
            declarations: [
                PreferencesComponent,
                ZwiftComponent,
                ZwiftSessionComponent,
                WorkoutsComponent,
                Sec2timePipe
            ],
            providers: [ApiService, AlertService, {provide: APP_BASE_HREF, useValue: '/'}],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
