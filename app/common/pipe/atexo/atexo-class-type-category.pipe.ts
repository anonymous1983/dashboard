// app/common/pipe/atexo/atexo-type-category.pipe.ts
/**
 *
 * @name atexo-type-category.pipe.ts
 *
 */

import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Build custom class type category
 * Takes an exponent argument that defaults to 'type-'.
 * Usage:
 *   value | toTypeCategoryClass:exponent
 * Example:
 *   {{ 'list' |  toTypeCategoryClass:'type-'}}
 *   formats to: 'type-list'
 */
@Pipe({name: 'toTypeCategoryClass'})
export class ToTypeCategoryClassPipe implements PipeTransform {
    postClass:string;
    transform(value:string, args:string[]) : any {
        this.postClass = args[0] || 'type-';
        return this.postClass.concat(value.toLowerCase());
    }
}