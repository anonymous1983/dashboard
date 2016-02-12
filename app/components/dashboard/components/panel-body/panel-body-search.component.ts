import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent} from 'angular2/src/facade/lang';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodySearchProvider} from './providers/panel-body-search.provider';


@Component({
    selector: 'panel-body-search',
    providers: [PanelBodySearchProvider]
    //inputs: ['panelObj']
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-search.tpl.html',
    pipes: [ToClassPipe]
})
export class PanelBodySearch {

    @Input() panelBodyObj;

    panelBodySearchProvider:PanelBodySearchProvider;
    timeOut:any;
    milliseconds:number;
    items:Array<any>;
    q:string;
    display:boolean;
    focusClass:boolean;


    constructor(panelBodySearchProvider:PanelBodySearchProvider) {
        this.items = [];
        this.milliseconds = 500;
        this.panelBodySearchProvider = panelBodySearchProvider;
        this.q = '';
        this.display = false;
    }

    ngOnInit() {
        return true;
    }

    quickSearch() {
        //let _panelBodyObj = this.panelBodyObj;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.panelBodySearchServiceAll();
        }, this.milliseconds);
    }

    quickSearchClear() {
        this.q = '';
        this.items = [];
        return false;
    }

    quickSearchDisplay(display?:boolean) {
        let _timeOut:number, _milliseconds:number = 100;
        clearTimeout(_timeOut);
        _timeOut = setTimeout(() => {
            if (isPresent(display)) {
                this.display = display;
                this.focusClass = display;
            } else {
                this.display = (this.items.length > 0) ? true : false;
            }
        }, _milliseconds);
    }


    panelBodySearchServiceAll() {

        if (this.q) {
            var arraySearch = {
                motsClefs: this.q
            };
            this.panelBodySearchProvider.all(this.panelBodyObj.urlData, arraySearch).subscribe((res:Response) => {

                if (res.status === 200) {
                    this.items = res.json();
                    this.quickSearchDisplay();
                }
            });
        } else {
            this.items = [];
            this.quickSearchDisplay();
        }
        return true;
    }

}