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
    avg_cadence: number;
    max_cadence: number;
    avg_power: number;
    max_power: number;
    total_calories: number;
    max_heart_rate: number;
    avg_heart_rate: number;
    total_elapsed_time: number;
    start_time: string;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.apiService.getSession(params.get('id')).subscribe(result => {
                this.avg_cadence = result[0].avg_cadence;
                this.max_cadence = result[0].max_cadence;
                this.avg_power = result[0].avg_power;
                this.max_power = result[0].max_power;
                this.total_calories = result[0].total_calories;
                this.max_heart_rate = result[0].max_heart_rate;
                this.avg_heart_rate = result[0].avg_heart_rate;
                this.total_elapsed_time = result[0].total_elapsed_time;
                this.start_time = result[0].start_time;

                const laps = result[0]['laps'];
                const power = [];
                const distance = [];
                const heartRate = [];
                const cadence = [];
                const avg_heart_rate = [];
                const avg_cadence = [];
                const avg_power = [];

                const p = laps.map(res => {
                    const records = this.extracted(res.records);
                    records.forEach((item) => {
                        power.push(item.power);
                        distance.push(item.distance.toFixed(2));
                        heartRate.push(item.heart_rate);
                        cadence.push(item.cadence);
                        avg_heart_rate.push(result[0].avg_heart_rate);
                        avg_cadence.push(result[0].avg_cadence);
                        avg_heart_rate.push(result[0].avg_heart_rate);
                        avg_power.push(result[0].avg_power);
                    });
                });

                this.chart = new Chart('canvas', {
                    type: 'line',
                    data: {
                        labels: distance,
                        datasets: [
                            {
                                data: power,
                                pointRadius: 0,
                                label: 'Power',
                                borderColor: '#1e8829',
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
                            },
                            {
                                data: avg_heart_rate,
                                pointRadius: 0,
                                label: 'avg. heart rate',
                                borderColor: '#ff4d43',
                                backgroundColor: '#ffffff',
                                fill: false,
                                borderDash: [5, 5]
                            },
                            {
                                data: avg_cadence,
                                pointRadius: 0,
                                label: 'avg. cadence',
                                borderColor: '#6c93e0',
                                backgroundColor: '#ffffff',
                                fill: false,
                                borderDash: [5, 5]
                            },
                            {
                                data: avg_power,
                                pointRadius: 0,
                                label: 'avg. power',
                                borderColor: '#12e02b',
                                backgroundColor: '#ffffff',
                                fill: false,
                                borderDash: [5, 5]
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
                                display: false,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Distance'
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

    private extracted(records) {
        let i = 0;
        const ret = [];
        const maxVal = 250;
        const delta = Math.floor(records.length / maxVal);
        for (i = 0; i < records.length; i = i + delta) {
            ret.push(records[i]);
        }
        return ret;
    }
}
