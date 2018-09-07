import {AppRoutingModule} from './app-routing.module';
import {TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

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
