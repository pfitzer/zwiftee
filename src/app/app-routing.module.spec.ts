import {AppRoutingModule} from './app-routing.module';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AlertComponent} from './directives/alert/alert.component';
import {ZwiftComponent} from './zwift/zwift.component';
import {ZwiftSessionComponent} from './zwift-session/zwift-session.component';
import {PreferencesComponent} from './preferences/preferences.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {Sec2timePipe} from './pipes/sec2time.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AlertService} from './alert.service';
import {APP_BASE_HREF} from '@angular/common';

describe('AppRoutingModule', () => {
    let appRoutingModule: AppRoutingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                NgxPaginationModule,
            ],
        }).compileComponents();
        appRoutingModule = new AppRoutingModule();
    });

    it('should create an instance', () => {
        expect(appRoutingModule).toBeTruthy();
    });
});
