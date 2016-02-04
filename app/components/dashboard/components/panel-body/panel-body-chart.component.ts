import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

@Component({
    selector: 'panel-body-chart'
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-chart.tpl.html',
    pipes: [ToClassPipe]
})
export class PanelBodyChart {

    @Input() panelBodyObj;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
    }

}