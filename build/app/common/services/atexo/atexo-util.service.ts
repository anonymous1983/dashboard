// app/common/services/atexo/atexo-util.service.ts
/**
 *
 * @name atexo-util.service.ts
 *
 */

import {Injectable} from 'angular2/core';
import {URLSearchParams} from 'angular2/http';
import {isPresent, isJsObject, isString } from 'angular2/src/facade/lang';

import {AtexoPathConstant, AtexoRestConstant, RequestUrlType} from '../../constants/atexo.constant';
import construct = Reflect.construct;


@Injectable()
export class Util {
    static instance:Util;
    static isCreating:Boolean = false;

    constructor() {
        if (!Util.isCreating) {
            throw new Error('[Util] You can\'t call new in Singleton instances!');
        }
    }

    static getInstance() {
        if (Util.instance == null) {
            Util.isCreating = true;
            Util.instance = new Util();
            Util.isCreating = false;
        }
        return Util.instance;
    }

    Path() {
        return new Path();
    }

    Rest() {
        return new Rest();
    }

    RequestOptions() {
        return new RequestOptions();
    }

    Grep(arr, callback) {
        let newArr = [],
            len = arr.length,
            i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            if (callback(e)) {
                newArr.push(e);
            }
        }
        return newArr;
    }

    Map(arr, callback) {
        let newArr = [],
            len = arr.length,
            i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            var n = callback(e);
            newArr.push(n);
        }
        return newArr;
    }

}


class Rewriter {
    private base:string = '';
    private uri:string = '';
    private type:number = RequestUrlType.Relative;

    constructor(base:string, uri?:any) {
        uri = isPresent(uri) ? uri : '';
        this.base = base;
        this.checkUri(uri);
    }

    private checkUri(uri:any) {
        if (isString(uri)) {
            this.type = RequestUrlType.Relative;
            this.uri = uri;
        } else {
            this.type = uri['type'];
            this.uri = uri['url'];
        }
        return this;
    }

    setPath(uri:any):Rewriter {
        this.checkUri(uri);
        return this;
    }

    build():string {
        if (this.type === RequestUrlType.Relative) {
            return this.base + this.uri;
        }
        return this.uri;

    }
}

class Path extends Rewriter {
    constructor(path?:string) {
        path = isPresent(path) ? path : '';
        super(AtexoPathConstant.base, path);
    }
}

class Rest extends Rewriter {
    constructor(url?:string) {
        url = isPresent(url) ? url : '';
        super(AtexoRestConstant.baseUrl, url);
    }
}

class RequestOptions {

    searchParams:URLSearchParams;

    constructor() {
        this.searchParams = new URLSearchParams();
    }

    setSearchParams(data?:Object):URLSearchParams {
        if (!isPresent(data)) {
            return;
        } else {
            if (isJsObject(data)) {
                for (var item in data) {
                    if (data.hasOwnProperty(item)) {
                        this.searchParams.set(item, data[item]);
                    }
                }
            }
            return this.searchParams;
        }
    }
}