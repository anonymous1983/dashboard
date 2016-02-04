import {Component, View, ElementRef, Input, ViewEncapsulation} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {PanelBody} from '../panel-body/panel-body.component';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

@Component({
    selector: 'panel'
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel/templates/panel.tpl.html',
    directives: [PanelBody],
    pipes: [ToClassPipe],
    encapsulation: ViewEncapsulation.Emulated
})

export class Panel {

    @Input() panelObj;
    //panelObj:Object;
    collapseClass:Boolean = false;
    closeClass:Boolean = false;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
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

