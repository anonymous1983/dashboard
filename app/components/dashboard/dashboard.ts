import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {PanelProvider} from './providers/panelProvider';
import {Progress} from '../../common/util/progress';

import {Panel} from './components/panel/panel';

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
    namePage:string;
    offset:number = 0;
    limit:number = 5;
    panelProvider:PanelProvider;
    endContent:boolean = false;

    constructor(panelProvider:PanelProvider) {
        this.namePage = 'Dashboard';
        this.panelProvider = panelProvider;
        this.panelServiceAll();
    }

    panelServiceAll() {
        var param = {
            limit: this.limit,
            offset: this.offset
        };
        Progress.getInstance().incrementNbrProgress();
        console.log(Progress.getInstance().getNbrProgress());
        this.panelProvider.all(param).subscribe((res:Response) => {

            if (res.status === 200) {
                this.endContent = false;
                res.json().forEach((obj) => {
                    this.panels.push(obj);
                });
                Progress.getInstance().decrementNbrProgress();
            } else {
                this.endContent = true;
            }

        });
    }
}