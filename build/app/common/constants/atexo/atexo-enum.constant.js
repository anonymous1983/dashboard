// app/common/constants/atexo/atexo-enum.constant.ts
/**
 *
 * @name atexo-enum.constant.ts
 *
 */
System.register([], function(exports_1) {
    var RequestUrlType;
    return {
        setters:[],
        execute: function() {
            (function (RequestUrlType) {
                RequestUrlType[RequestUrlType["Static"] = 0] = "Static";
                RequestUrlType[RequestUrlType["Relative"] = 1] = "Relative";
                RequestUrlType[RequestUrlType["Absolute"] = 2] = "Absolute";
            })(RequestUrlType || (RequestUrlType = {}));
            exports_1("RequestUrlType", RequestUrlType);
        }
    }
});

//# sourceMappingURL=atexo-enum.constant.js.map
