System.register(['angular2/core', '../../../../common/pipe/atexo.pipe', '../panel-body/panel-body-list.component', '../panel-body/panel-body-chart.component', '../panel-body/panel-body-search.component', '../panel-body/panel-body-editor.component', '../panel-body/panel-body-article.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_pipe_1, panel_body_list_component_1, panel_body_chart_component_1, panel_body_search_component_1, panel_body_editor_component_1, panel_body_article_component_1;
    var PanelBody;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (panel_body_list_component_1_1) {
                panel_body_list_component_1 = panel_body_list_component_1_1;
            },
            function (panel_body_chart_component_1_1) {
                panel_body_chart_component_1 = panel_body_chart_component_1_1;
            },
            function (panel_body_search_component_1_1) {
                panel_body_search_component_1 = panel_body_search_component_1_1;
            },
            function (panel_body_editor_component_1_1) {
                panel_body_editor_component_1 = panel_body_editor_component_1_1;
            },
            function (panel_body_article_component_1_1) {
                panel_body_article_component_1 = panel_body_article_component_1_1;
            }],
        execute: function() {
            PanelBody = (function () {
                function PanelBody(el) {
                    this.el = el;
                    this.el = el;
                }
                PanelBody.prototype.ngOnInit = function () {
                    return true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBody.prototype, "panelBodyObj", void 0);
                PanelBody = __decorate([
                    core_1.Component({
                        selector: 'panel-body'
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body.tpl.html',
                        directives: [panel_body_list_component_1.PanelBodyList, panel_body_chart_component_1.PanelBodyChart, panel_body_search_component_1.PanelBodySearch, panel_body_article_component_1.PanelBodyArticle, panel_body_editor_component_1.PanelBodyEditor],
                        pipes: [atexo_pipe_1.ToClassPipe]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PanelBody);
                return PanelBody;
            })();
            exports_1("PanelBody", PanelBody);
        }
    }
});

//# sourceMappingURL=panel-body.component.js.map
