import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AlertComponent} from './directives/alert/alert.component';
import {AppRoutingModule} from './app-routing.module';
import {ZwiftComponent} from './zwift/zwift.component';
import {ZwiftSessionComponent} from './zwift-session/zwift-session.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {Sec2timePipe} from './pipes/sec2time.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {AlertService} from './alert.service';
import {NgxPaginationModule} from 'ngx-pagination';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                AlertComponent,
                ZwiftComponent,
                ZwiftSessionComponent,
                WorkoutsComponent,
                Sec2timePipe
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                NgxPaginationModule
            ],
            providers: [AlertService, {provide: APP_BASE_HREF, useValue: '/'}]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'zwiftee'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('zwiftee');
    }));
});
