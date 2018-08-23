import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {Chart} from 'chart.js';


@Component({
    selector: 'app-zwift-session',
    templateUrl: './zwift-session.component.html',
    styleUrls: ['./zwift-session.component.css']
})
export class ZwiftSessionComponent implements OnInit {

    session;
    chart = [];

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.apiService.getSession(params.get('id')).subscribe(result => {
                const laps = result[0]['laps'];
                const power = [];
                const dates = [];
                const heartRate = [];
                const cadence = [];
                const p = laps.map(res => {
                    const records = this.extracted(res);
                    records.forEach((item) => {
                        power.push(item.power);
                        const jsdate = new Date(item.timestamp);
                        dates.push(jsdate.toLocaleTimeString('de'));
                        heartRate.push(item.heart_rate);
                        cadence.push(item.cadence);
                    });
                });

                this.chart = new Chart('canvas', {
                    type: 'line',
                    data: {
                        labels: dates,
                        datasets: [
                            {
                                data: power,
                                pointRadius: 0,
                                label: 'Power',
                                borderColor: '#3cba9f',
                                backgroundColor: '#ffffff',
                                fill: false
                            },
                            {
                                data: heartRate,
                                pointRadius: 0,
                                label: 'Heartrate',
                                borderColor: '#ba1336',
                                backgroundColor: '#ffffff',
                                fill: false
                            },
                            {
                                data: cadence,
                                pointRadius: 0,
                                label: 'Cadence',
                                borderColor: '#291cba',
                                backgroundColor: '#ffffff',
                                fill: false
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Time'
                                }
                            }],
                            yAxes: [{
                                display: true
                            }],
                        }
                    }
                });
            });
        });
    }

    private extracted(res) {
        let i = 0;
        const ret = [];
        const records = res.records;
        const maxVal = 200;
        const delta = Math.floor(records.length / maxVal);
        for (i = 0; i < records.length; i = i + delta) {
            ret.push(records[i]);
        }
        return ret;
    }
}
