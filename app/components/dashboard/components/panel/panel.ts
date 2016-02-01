import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

@Component({
    selector: 'panel'
})

@View({
    templateUrl: './app/components/dashboard/components/panel/templates/panel.tpl.html',
})
export class Panel {

    constructor() {
    }
}