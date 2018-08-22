import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import { ZwiftComponent } from './zwift/zwift.component';
import { Sec2timePipe } from './zwift/pipes/sec2time.pipe';
import { AppRoutingModule } from './app-routing.module';
import {ApiService} from './api.service';
import { PreferencesComponent } from './preferences/preferences.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        ZwiftComponent,
        Sec2timePipe,
        PreferencesComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        AppRoutingModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
