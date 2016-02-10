System.register(['angular2/core', '../panel-body/panel-body.component', '../../../../common/pipe/atexo.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, panel_body_component_1, atexo_pipe_1;
    var Panel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (panel_body_component_1_1) {
                panel_body_component_1 = panel_body_component_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            }],
        execute: function() {
            Panel = (function () {
                function Panel(el) {
                    this.el = el;
                    //panelObj:Object;
                    this.collapseClass = false;
                    this.closeClass = false;
                    this.el = el;
                }
                Panel.prototype.ngOnInit = function () {
                    return true;
                };
                Panel.prototype.collapse = function () {
                    this.collapseClass = !this.collapseClass;
                    return false;
                };
                Panel.prototype.close = function () {
                    this.closeClass = !this.closeClass;
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Panel.prototype, "panelObj", void 0);
                Panel = __decorate([
                    core_1.Component({
                        selector: 'panel'
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel/templates/panel.tpl.html',
                        directives: [panel_body_component_1.PanelBody],
                        pipes: [atexo_pipe_1.ToClassPipe],
                        encapsulation: core_1.ViewEncapsulation.Emulated
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Panel);
                return Panel;
            })();
            exports_1("Panel", Panel);
        }
    }
});

//# sourceMappingURL=panel.component.js.map
