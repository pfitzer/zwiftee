import {Pipe, PipeTransform} from '@angular/core';
import * as dateformat from '../../../js/dateformat';

@Pipe({
    name: 'sec2time'
})
export class Sec2timePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let seconds = parseInt(value, 10);

        const days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        const hrs = Math.floor(seconds / 3600);
        seconds -= hrs * 3600;
        const mnts = Math.floor(seconds / 60);
        seconds -= mnts * 60;
        const time = hrs + ':' + mnts + ':' + seconds;
        if (days > 0) {
            return days + ' days ' + time;
        }
        ;
        return time;
    }

}
