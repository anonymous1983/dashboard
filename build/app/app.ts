import {Component, View, bind} from 'angular2/core';
import {ROUTER_PROVIDERS, RouterOutlet, RouteConfig, RouterLink, Location} from 'angular2/router';

import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Routing } from './routing';
import { Progress } from './common/services/atexo.service';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: './app/app.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig(Routing)
export class AppComponent {
    location:Location;
    progress = Progress.getInstance();

    constructor(location:Location) {
        this.location = location;
    }

    isActive(path) {
        return this.location.path() === path;
    }
}