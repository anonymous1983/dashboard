// app/common/services/atexo/atexo-convert.service.ts
/**
 *
 * @name atexo-convert.service.ts
 *
 */

import {Injectable} from 'angular2/core';
import {isPresent, isBlank} from 'angular2/src/facade/lang';

@Injectable()
export class Convert {

    static instance:Convert;
    static isCreating:Boolean = false;

    private strDelimiter:string = ';';
    private arrData:Array<any>;
    private jsonData:String;
    private arrProperty:Array<string> = [];
    private strDelimiter:String = ';';

    constructor() {
        if (!Convert.isCreating) {
            throw new Error('[Convert] You can\'t call new in Singleton instances!');
        }
    }

    static getInstance() {
        if (Convert.instance == null) {
            Convert.isCreating = true;
            Convert.instance = new Convert();
            Convert.isCreating = false;
        }
        return Convert.instance;
    }

    public cvsToJson(csv:string, strDelimiter?:string) {
        let lines = csv.split('\n'),
            linesLength = (lines[lines.length - 1] === '') ? lines.length - 1 : lines.length;

        if (isPresent(strDelimiter)) {
            this.strDelimiter = strDelimiter;
        }

        this.arrData = [];

        this.arrProperty = this.getArrProperty(lines[0]);

        for (let i = 1; i < linesLength; i++) {

            let obj = {},
                currentline = lines[i].split(this.strDelimiter);

            for (var j = 0; j < this.arrProperty.length; j++) {
                obj[this.arrProperty[j]] = currentline[j];
            }

            this.arrData.push(obj);

        }

        //return this.arrData; //JavaScript object
        this.jsonData = JSON.stringify(this.arrData);
        return this.jsonData; //JSON
    }

    public getArrayData() {
        return this.arrData;
    }

    public getArrProperty(lineProperty:String) {
        let arrProperty:Array<String> = [];
        arrProperty = lineProperty.split(this.strDelimiter);
        if (arrProperty[arrProperty.length - 1] === '') {
            arrProperty.pop();
        }
        return this.arrProperty = arrProperty;
    }

}