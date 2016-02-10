// app/common/services/atexo.service.ts
/**
 *
 * @name atexo.service.ts
 *
 */
System.register(['./atexo/atexo-util.service', './atexo/atexo-progress.service'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (atexo_util_service_1_1) {
                exportStar_1(atexo_util_service_1_1);
            },
            function (atexo_progress_service_1_1) {
                exportStar_1(atexo_progress_service_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=atexo.service.js.map
