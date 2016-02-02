import {RouteDefinition} from 'angular2/router';

import { About } from './components/about/about';
import { Dashboard } from './components/dashboard/dashboard.component';


export var Routing = [
    /*
     * Dashboard
     */
    {
        path: '',
        component: Dashboard,
        as: 'Dashboard'
    }
];