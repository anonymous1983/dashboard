// app/common/pipe/atexo/atexo-trancate.pipe.ts
/**
 *
 * @name atexo-trancate.pipe.ts
 *
 */

import {Pipe, PipeTransform} from 'angular2/core';
import {isPresent } from 'angular2/src/facade/lang';
/*
 * Truncates multi-line text (no HTML)
 * Takes an exponent argument that defaults to 100.
 * Usage:
 *   value | trancate:exponent
 * Example:
 *   {{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' |  trancate:10}}
 *   formats to: 'Lorem ipsu...'
 */
@Pipe({name: 'trancate'})
export class TrancatePipe implements PipeTransform {
    length:number;

    transform(value:string, args:any[]):any {
        this.length = isPresent(args[0]) ? args[0] : 100;
        return value.substring(0, length);
    }
}