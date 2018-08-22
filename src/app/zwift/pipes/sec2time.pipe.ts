import {Pipe, PipeTransform} from '@angular/core';
import * as dateformat from '../../../../js/dateformat';

@Pipe({
    name: 'sec2time'
})
export class Sec2timePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        const date = new Date(null, null, null, null, null, Math.ceil(value));
        try {
            return dateformat(date, 'h:MM:ss');
        } catch (e) {
        }
    }

}
