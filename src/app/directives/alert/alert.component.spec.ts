import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {APP_BASE_HREF} from '@angular/common';
import {AlertService} from '../../alert.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {ZwiftComponent} from '../../zwift/zwift.component';
import {ZwiftSessionComponent} from '../../zwift-session/zwift-session.component';
import {WorkoutsComponent} from '../../workouts/workouts.component';
import {Sec2timePipe} from '../../pipes/sec2time.pipe';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

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
                AlertComponent,
                ZwiftComponent,
                ZwiftSessionComponent,
                WorkoutsComponent,
                Sec2timePipe
            ],
            providers: [AlertService, {provide: APP_BASE_HREF, useValue: '/'}],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
