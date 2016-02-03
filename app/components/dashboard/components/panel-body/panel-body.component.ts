import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToTypeCategoryClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyList} from '../panel-body/panel-body-list.component';
import {PanelBodyChart} from '../panel-body/panel-body-chart.component';
import {PanelBodySearch} from '../panel-body/panel-body-search.component';
import {PanelBodyEditor} from '../panel-body/panel-body-editor.component';
import {PanelBodyArticle} from '../panel-body/panel-body-article.component';


@Component({
    selector: 'panel-body'
})

@View({
    templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body.tpl.html',
    directives: [PanelBodyList, PanelBodyChart, PanelBodySearch, PanelBodyArticle, PanelBodyEditor],
    pipes: [ToTypeCategoryClassPipe]
})
export class PanelBody {

    @Input() panelBodyObj;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
    }

}