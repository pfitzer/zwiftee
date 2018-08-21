import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Session} from './models/session.model';
import * as $ from 'jquery';

@Component({
    selector: 'app-zwift',
    templateUrl: './zwift.component.html',
    styleUrls: ['./zwift.component.css']
})
export class ZwiftComponent implements OnInit {

    sessions: Session[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getSessions();
    }

    getSessions() {
        this.apiService.getSessions().subscribe(data => {
            const sessions = [];
            $.each(data, function(key, value) {
                sessions.push(value);
            });
            console.log(sessions);
            this.sessions = sessions;
        });
    }

}
