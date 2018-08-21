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
    p: 1;
    collection: any[] = this.sessions;
    overall_distance: number;
    overall_avg_speed: number;
    overall_cadence: number;
    overall_time: number;
    overall_avg_heartrate: number;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getSessions();
    }

    getSessions() {
        this.apiService.getSessions().subscribe(data => {
            const sessions = [];
            $.each(data, function (key, value) {
                value.created = new Date(value.created);
                sessions.push(value);
            });
            console.log(sessions);
            this.sessions = sessions;
            this._countTotals();
        });
    }

    _countTotals() {
        let distance = 0;
        let avg_speed = 0;
        const all = this.sessions.length;
        let time = 0;
        let cadence = 0;
        let heartrate = 0;
        this.sessions.forEach(session => {
            distance += session.distance;
            avg_speed += session.avg_speed;
            time += session.time_elapsed;
            cadence += session.avg_cadence;
            heartrate += session.avg_heart_rate;
        });
        this.overall_distance = distance;
        this.overall_avg_speed = avg_speed / all;
        this.overall_cadence = cadence / all;
        this.overall_time = time;
        this.overall_avg_heartrate = heartrate / all;
    }

}
