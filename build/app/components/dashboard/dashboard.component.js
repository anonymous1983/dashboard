System.register(['angular2/core', '../../common/services/atexo.service', './providers/panel.provider', './components/panel/panel.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_service_1, panel_provider_1, panel_component_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            },
            function (panel_provider_1_1) {
                panel_provider_1 = panel_provider_1_1;
            },
            function (panel_component_1_1) {
                panel_component_1 = panel_component_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(panelProvider) {
                    this.panels = [];
                    this.panelsZones = {
                        a: new Array(),
                        b: new Array(),
                        c: new Array(),
                        d: new Array(),
                        z: new Array()
                    };
                    this.offset = 0;
                    this.limit = 5;
                    this.endContent = false;
                    this.namePage = 'Dashboard';
                    this.panelProvider = panelProvider;
                    this.panelServiceAll();
                }
                Dashboard.prototype.panelServiceAll = function () {
                    var _this = this;
                    var param = {
                        limit: this.limit,
                        offset: this.offset
                    };
                    atexo_service_1.Progress.getInstance().incrementNbrProgress();
                    this.panelProvider.all(param).subscribe(function (res) {
                        if (res.status === 200) {
                            _this.endContent = false;
                            res.json().forEach(function (obj) {
                                // Panels Object
                                _this.panels.push(obj);
                                // Panels Zone Object
                                switch (obj.location.zone) {
                                    case 1:
                                        _this.panelsZones.a.push(obj);
                                        break;
                                    case 2:
                                        _this.panelsZones.b.push(obj);
                                        break;
                                    case 3:
                                        _this.panelsZones.c.push(obj);
                                        break;
                                    case 4:
                                        _this.panelsZones.d.push(obj);
                                        break;
                                    default:
                                        _this.panelsZones.z.push(obj);
                                }
                            });
                            atexo_service_1.Progress.getInstance().decrementNbrProgress();
                        }
                        else {
                            _this.endContent = true;
                        }
                    });
                };
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [panel_provider_1.PanelProvider]
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/templates/dashboard.tpl.html',
                        directives: [panel_component_1.Panel]
                    }), 
                    __metadata('design:paramtypes', [panel_provider_1.PanelProvider])
                ], Dashboard);
                return Dashboard;
            })();
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=dashboard.component.js.map
