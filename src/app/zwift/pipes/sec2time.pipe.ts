import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sec2time'
})
export class Sec2timePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return new Date(null, null, null, null, null, value).toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0];
    }

}
