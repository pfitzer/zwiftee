import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-zwift',
    templateUrl: './zwift.component.html',
    styleUrls: ['./zwift.component.css']
})
export class ZwiftComponent implements OnInit {

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    getSessions() {
        this.apiService.getSessions().subscribe((data: Array<object>) => {
           return data;
        });
    }

}
