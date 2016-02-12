import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyListProvider} from './providers/panel-body-list.provider';

@Component({
    selector: 'panel-body-list',
    providers: [PanelBodyListProvider]
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-list.tpl.html',
    pipes: [ToClassPipe]
})
export class PanelBodyList {

    @Input() panelBodyObj;
    panelBodyListProvider:PanelBodyListProvider;
    items:Array<any>;

    constructor(panelBodyListProvider:PanelBodyListProvider) {
        this.items = [];
        this.panelBodyListProvider = panelBodyListProvider;
    }

    ngOnInit() {
        this.panelBodyListServiceAll(this.panelBodyObj.urlData);
        return true;
    }

    panelBodyListServiceAll(url) {

        this.panelBodyListProvider.all(url).subscribe((res:Response) => {

            if (res.status === 200) {
                this.items = res.json();
            }

        });
    }

}