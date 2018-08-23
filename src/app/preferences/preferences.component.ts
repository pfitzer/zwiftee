import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';
import {PreferencesModel} from '../models/preferences.model';

@Component({
    selector: 'app-preferences',
    templateUrl: './preferences.component.html',
    styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
    formdata: FormGroup;
    prefs: PreferencesModel;

    units: string[] = [
        'metric',
        'imperial'
    ];

    locale: string[] = ['de'];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        this.formdata = new FormGroup({
            units: new FormControl(),
            locale: new FormControl()
        });
        this.getPreferences();
    }

    getPreferences() {
        this.apiService.getPreferences().subscribe(result => {
                this.prefs = result;
                this.formdata.setValue({units: this.prefs.units, locale: this.prefs.locale});
            }
        );
    }

    submitForm() {
        const prefs = new PreferencesModel();
        prefs.units = this.formdata.getRawValue().units;
        prefs.locale = this.formdata.getRawValue().locale;
        this.apiService.savePreferences(prefs).subscribe((response) => console.log(response));
    }
}
