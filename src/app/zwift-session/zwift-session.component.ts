import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service';


@Component({
    selector: 'app-zwift-session',
    templateUrl: './zwift-session.component.html',
    styleUrls: ['./zwift-session.component.css']
})
export class ZwiftSessionComponent implements OnInit {

    session;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.apiService.getSession(params.get('id')).subscribe(result => {
                this.session = result;
            });
        });
    }

}
