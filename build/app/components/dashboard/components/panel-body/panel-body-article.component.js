System.register(['angular2/core', '../../../../common/pipe/atexo.pipe', './providers/panel-body-article.provider', '../../../../common/services/atexo.service', '../../../../common/components/atexo-spinner.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_pipe_1, panel_body_article_provider_1, atexo_service_1, atexo_spinner_component_1;
    var PanelBodyArticle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (panel_body_article_provider_1_1) {
                panel_body_article_provider_1 = panel_body_article_provider_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            },
            function (atexo_spinner_component_1_1) {
                atexo_spinner_component_1 = atexo_spinner_component_1_1;
            }],
        execute: function() {
            PanelBodyArticle = (function () {
                function PanelBodyArticle(el, panelBodyArticleProvider) {
                    this.el = el;
                    this.articles = [];
                    this.limit = 2;
                    this.el = el;
                    this.offset = this.limit;
                    this.panelBodyArticleProvider = panelBodyArticleProvider;
                }
                PanelBodyArticle.prototype.ngOnInit = function () {
                    this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);
                    return true;
                };
                PanelBodyArticle.prototype.panelBodyArticleServiceAll = function (url) {
                    var _this = this;
                    this.panelBodyArticleProvider.all(url).subscribe(function (res) {
                        if (res.status === 200) {
                            _this.articles = res.json();
                        }
                    });
                };
                PanelBodyArticle.prototype.more = function () {
                    this.offset += this.limit;
                    return false;
                };
                PanelBodyArticle.prototype.moreArticles = function () {
                    this.offset = this.articles.length;
                    return false;
                };
                PanelBodyArticle.prototype.lessArticles = function () {
                    this.offset = this.limit;
                    return false;
                };
                PanelBodyArticle.prototype.selectArticle = function (id) {
                    this.articleSelected = atexo_service_1.Util.getInstance().Grep(this.articles, function (item) {
                        return (item.id === id);
                    });
                    this.articleSelected = this.articleSelected[0];
                    return false;
                };
                PanelBodyArticle.prototype.closeSelectArticle = function () {
                    this.articleSelected = null;
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyArticle.prototype, "panelBodyObj", void 0);
                PanelBodyArticle = __decorate([
                    core_1.Component({
                        selector: 'panel-body-article',
                        providers: [panel_body_article_provider_1.PanelBodyArticleProvider]
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-article.tpl.html',
                        pipes: [atexo_pipe_1.ToClassPipe, atexo_pipe_1.ToDatePipe],
                        directives: [atexo_spinner_component_1.AtexoSpinner]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, panel_body_article_provider_1.PanelBodyArticleProvider])
                ], PanelBodyArticle);
                return PanelBodyArticle;
            })();
            exports_1("PanelBodyArticle", PanelBodyArticle);
        }
    }
});

//# sourceMappingURL=panel-body-article.component.js.map
