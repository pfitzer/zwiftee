import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-beenpwned',
    templateUrl: './beenpwned.component.html',
    styleUrls: ['./beenpwned.component.css']
})
export class BeenpwnedComponent implements OnInit {
    public breaches: Array<object> = [];
    public breachedAccount: Array<object> = [];
    public email: string;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    public getBreaches() {
        this.apiService.getBreaches().subscribe((data: Array<object>) => {
            this.breaches = data;
            console.log(data);
        });
    }

    public getBreachedAccount() {
        this.apiService.getBreachedAccount(this.email).subscribe((data: Array<object>) => {
            this.breachedAccount = data;
            console.log(data);
        });
    }

}
