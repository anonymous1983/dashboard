System.register(['angular2/core', 'angular2/http', '../../../common/services/atexo.service', '../../../common/constants/atexo.constant'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, atexo_service_1, atexo_constant_1;
    var PanelProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (atexo_service_1_1) {
                atexo_service_1 = atexo_service_1_1;
            },
            function (atexo_constant_1_1) {
                atexo_constant_1 = atexo_constant_1_1;
            }],
        execute: function() {
            PanelProvider = (function () {
                function PanelProvider(http) {
                    this.http = http;
                }
                PanelProvider.prototype.all = function (_parameter) {
                    _parameter = (typeof _parameter !== 'undefined') ? _parameter : atexo_constant_1.AtexoRestConstant.request.panel.all.parameter;
                    var options = new http_1.RequestOptions({
                        method: atexo_constant_1.AtexoRestConstant.request.panel.all.method,
                        url: atexo_service_1.Util.getInstance().Rest().setPath(atexo_constant_1.AtexoRestConstant.request.panel.all.url).build(),
                        search: atexo_service_1.Util.getInstance().RequestOptions().setSearchParams(_parameter)
                    });
                    var req = new http_1.Request(options);
                    return this.http.request(req);
                    // Or use Get function to get request
                    // return this.http.get(this.requestUrl);
                };
                PanelProvider = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PanelProvider);
                return PanelProvider;
            })();
            exports_1("PanelProvider", PanelProvider);
        }
    }
});

//# sourceMappingURL=panel.provider.js.map
