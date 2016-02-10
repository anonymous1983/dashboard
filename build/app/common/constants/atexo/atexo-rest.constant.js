// app/common/constants/atexo/atexo-rest.constant.ts
/**
 *
 * @name atexo-rest.constant.ts
 *
 */
System.register(['angular2/http', './atexo-enum.constant'], function(exports_1) {
    var http_1, atexo_enum_constant_1;
    var AtexoRestConstant;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (atexo_enum_constant_1_1) {
                atexo_enum_constant_1 = atexo_enum_constant_1_1;
            }],
        execute: function() {
            exports_1("AtexoRestConstant", AtexoRestConstant = {
                baseUrl: 'http://rsem-pic/dashboard/',
                _format: 'json',
                request: {
                    panel: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            url: 'server/mocks/panel.json',
                            type: atexo_enum_constant_1.RequestUrlType.Relative,
                            _format: 'json',
                            parameter: {
                                limit: 5,
                                offset: 0
                            }
                        },
                        byId: {
                            method: http_1.RequestMethod.Get,
                            url: 'panel/',
                            type: atexo_enum_constant_1.RequestUrlType.Relative
                        }
                    },
                    news: {
                        all: {
                            method: http_1.RequestMethod.Get,
                            url: 'news',
                            type: atexo_enum_constant_1.RequestUrlType.Relative,
                            _format: 'json',
                            parameter: {
                                limit: 5,
                                offset: 0
                            }
                        },
                        byId: {
                            method: http_1.RequestMethod.Get,
                            url: 'news/',
                            type: atexo_enum_constant_1.RequestUrlType.Relative
                        }
                    }
                }
            });
        }
    }
});

//# sourceMappingURL=atexo-rest.constant.js.map
