import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { APP_BASE_HREF } from '@angular/common';

import {AppComponent} from './app.component';
import {ZwiftComponent} from './zwift/zwift.component';
import {Sec2timePipe} from './pipes/sec2time.pipe';
import {AppRoutingModule} from './app-routing.module';
import {ApiService} from './api.service';
import {PreferencesComponent} from './preferences/preferences.component';
import {HeaderComponent} from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './directives/alert/alert.component';
import {AlertService} from './alert.service';
import {ZwiftSessionComponent} from './zwift-session/zwift-session.component';
import {WorkoutsComponent} from './workouts/workouts.component';


@NgModule({
    declarations: [
        AppComponent,
        ZwiftComponent,
        Sec2timePipe,
        PreferencesComponent,
        HeaderComponent,
        AlertComponent,
        ZwiftSessionComponent,
        WorkoutsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ApiService, AlertService, {provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
