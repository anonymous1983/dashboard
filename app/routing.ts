import {RouteDefinition} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';
import { Dashboard } from './components/dashboard/dashboard';


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