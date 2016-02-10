// app/common/pipe/atexo/atexo-timestamp-to-date.pipe.ts
/**
 *
 * @name atexo-timestamp-to-date.pipe.ts
 *
 */
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ToDatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             * Convert timestamp to Date
             * Usage:
             *   value | toDate
             * Example:
             *   {{ 1409011200 |  toDate}}
             *   formats to: 'Tue Aug 26 2014 02:00:00 GMT+0200 (Paris, Madrid (heure d’été))'
             */
            ToDatePipe = (function () {
                function ToDatePipe() {
                }
                ToDatePipe.prototype.transform = function (value) {
                    return new Date(value * 1000);
                };
                ToDatePipe = __decorate([
                    core_1.Pipe({ name: 'toDate' }), 
                    __metadata('design:paramtypes', [])
                ], ToDatePipe);
                return ToDatePipe;
            })();
            exports_1("ToDatePipe", ToDatePipe);
        }
    }
});

//# sourceMappingURL=atexo-timestamp-to-date.pipe.js.map
