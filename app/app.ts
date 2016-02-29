import {Component, View, Input, ViewEncapsulation, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


//import { Dashboard } from 'atexo-component-dashboard';
import { Dashboard } from './dashboard/atexo-component-dashboard';

@Component({
    selector: 'my-app'
})
@View({
    template: '<dashboard [config]="config"></dashboard>',
    directives: [Dashboard],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public config:Object = {
        json: {
            baseUrl: 'http://localhost:5600/',
            panel: 'server/mocks/panel.json',
            alert: 'server/mocks/alert.json'
        }
    };
}