// app/common/pipe/atexo/atexo-timestamp-to-date.pipe.ts
/**
 *
 * @name atexo-timestamp-to-date.pipe.ts
 *
 */

import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Convert timestamp to Date
 * Usage:
 *   value | toDate
 * Example:
 *   {{ 1409011200 |  toDate}}
 *   formats to: 'Tue Aug 26 2014 02:00:00 GMT+0200 (Paris, Madrid (heure d’été))'
 */
@Pipe({name: 'toDate'})
export class ToDatePipe implements PipeTransform {
    transform(value:number):any {
        return new Date(value * 1000);
    }
}