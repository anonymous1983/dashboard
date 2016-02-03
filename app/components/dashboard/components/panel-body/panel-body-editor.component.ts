import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToTypeCategoryClassPipe} from '../../../../common/pipe/atexo.pipe';

@Component({
    selector: 'panel-body-editor'

    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-editor.tpl.html',
    pipes: [ToTypeCategoryClassPipe]
})
export class PanelBodyEditor {

    @Input() panelBodyObj;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
    }

}