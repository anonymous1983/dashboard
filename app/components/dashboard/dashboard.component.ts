import {Component, View, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {Progress} from '../../common/services/atexo.service';

import {PanelProvider} from './providers/panel.provider';
import {Panel} from './components/panel/panel.component';
import {log} from "util";

@Component({
    selector: 'dashboard',
    providers: [PanelProvider]
})
@View({
    templateUrl: './app/components/dashboard/templates/dashboard.tpl.html',
    directives: [Panel]
})
export class Dashboard {
    panels:Object[] = [];
    panelsZones = {
        a: new Array(),
        b: new Array(),
        c: new Array(),
        d: new Array(),
        z: new Array()
    };

    panelsZonesArray:Array = [];
    namePage:string;
    offset:number = 0;
    limit:number = 5;
    panelProvider:PanelProvider;
    endContent:boolean = false;
    startsortable:string = '';

    @Input('dragula') bag:string;

    constructor(panelProvider:PanelProvider) {
        this.namePage = 'Dashboard';
        this.panelProvider = panelProvider;
        this.panelServiceAll();

    }

    log(ch:string) {
        console.log('----' + ch);
        this.startsortable = ch;
    }

    ngOnInit() {
        $('#sortable .column').sortable({
            connectWith: '.column',
            handle: '.panel-heading',
            // cancel: ".portlet-toggle",
            placeholder: 'portlet-placeholder ui-corner-all',
            update: (event, ui) => {
                //updateCharts();
                this.startsortable = 'update';
                this.log('update');
            },
            start: () => {
                //this.startsortable = 'start';
                this.log('start');
            },
            stop: () => {
                //this.startsortable = 'stop';
                this.log('stop');
            },
            sort: () => {
                //this.startsortable = 'sort';
                this.log('sort');
            },
            beforeStop: () => {
                //this.startsortable = 'beforeStop';
                this.log('beforeStop');
            },
            change: () => {
                //this.startsortable = 'change';
                this.log('change');
            }
        });
        return true;
    }

    panelServiceAll() {
        var param = {
            limit: this.limit,
            offset: this.offset
        };
        Progress.getInstance().incrementNbrProgress();
        this.panelProvider.all(param).subscribe((res:Response) => {

            if (res.status === 200) {
                this.endContent = false;
                this.panelsZonesArray = res.json();
                Progress.getInstance().decrementNbrProgress();
            } else {
                this.endContent = true;
            }

        });
    }
}