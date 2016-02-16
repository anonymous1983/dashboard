import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {Progress} from '../../common/services/atexo.service';

import {PanelProvider} from './providers/panel.provider';
import {Panel} from './components/panel/panel.component';

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
        this.panelProvider.all(param).subscribe((res:Response) => {

            if (res.status === 200) {
                this.endContent = false;
                res.json().forEach((obj) => {

                    // Panels Object

                    this.panels.push(obj);

                    // Panels Zone Object

                    switch (obj.location.zone) {
                        case 1:
                            this.panelsZones.a.push(obj);
                            break;
                        case 2:
                            this.panelsZones.b.push(obj);
                            break;
                        case 3:
                            this.panelsZones.c.push(obj);
                            break;
                        case 4:
                            this.panelsZones.d.push(obj);
                            break;
                        default:
                            this.panelsZones.z.push(obj);
                    }
                });

                Progress.getInstance().decrementNbrProgress();
            } else {
                this.endContent = true;
            }

        });
    }
}