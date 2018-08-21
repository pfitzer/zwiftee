import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import { ZwiftComponent } from './zwift/zwift.component';
import { Sec2timePipe } from './zwift/pipes/sec2time.pipe';


@NgModule({
    declarations: [
        AppComponent,
        ZwiftComponent,
        Sec2timePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
