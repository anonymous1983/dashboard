System.register(['./components/dashboard/dashboard.component'], function(exports_1) {
    var dashboard_component_1;
    var Routing;
    return {
        setters:[
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            exports_1("Routing", Routing = [
                /*
                 * Dashboard
                 */
                {
                    path: '',
                    component: dashboard_component_1.Dashboard,
                    as: 'Dashboard'
                }
            ]);
        }
    }
});

//# sourceMappingURL=routing.js.map
