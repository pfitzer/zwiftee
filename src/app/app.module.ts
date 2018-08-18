import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { BeenpwnedComponent } from './beenpwned/beenpwned.component';
import { BeenpwnedHeaderComponent } from './beenpwned-header/beenpwned-header.component';


@NgModule({
    declarations: [
        AppComponent,
        BeenpwnedComponent,
        BeenpwnedHeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
