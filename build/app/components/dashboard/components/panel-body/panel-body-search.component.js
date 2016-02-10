System.register(['angular2/core', '../../../../common/pipe/atexo.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_pipe_1;
    var PanelBodySearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            }],
        execute: function() {
            PanelBodySearch = (function () {
                function PanelBodySearch(el) {
                    this.el = el;
                    this.el = el;
                }
                PanelBodySearch.prototype.ngOnInit = function () {
                    return true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodySearch.prototype, "panelBodyObj", void 0);
                PanelBodySearch = __decorate([
                    core_1.Component({
                        selector: 'panel-body-search'
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-search.tpl.html',
                        pipes: [atexo_pipe_1.ToClassPipe]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PanelBodySearch);
                return PanelBodySearch;
            })();
            exports_1("PanelBodySearch", PanelBodySearch);
        }
    }
});

//# sourceMappingURL=panel-body-search.component.js.map
