import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

@Component({
    selector: 'panel',
    inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel/templates/panel.tpl.html'
})
export class Panel {

    panelObj:Object;
    collapseClass:Boolean = false;
    closeClass:Boolean = false;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    collapse() {
        this.collapseClass = !this.collapseClass;
        return false;
    }

    close() {
        this.closeClass = !this.closeClass;
        return false;
    }

}

