// app/common/services/atexo/atexo-progress.service.ts
/**
 *
 * @name atexo-progress.service.ts
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
    var Progress;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Progress = (function () {
                function Progress() {
                    this.nbrProgress = 0;
                    if (!Progress.isCreating) {
                        throw new Error('[Progress] You can\'t call new in Singleton instances!');
                    }
                }
                Progress.getInstance = function () {
                    if (Progress.instance == null) {
                        Progress.isCreating = true;
                        Progress.instance = new Progress();
                        Progress.isCreating = false;
                    }
                    return Progress.instance;
                };
                Progress.prototype.getNbrProgress = function () {
                    return this.nbrProgress;
                };
                Progress.prototype.showBackdrop = function () {
                    return this.getNbrProgress();
                };
                Progress.prototype.incrementNbrProgress = function () {
                    this.nbrProgress++;
                };
                Progress.prototype.decrementNbrProgress = function () {
                    if (this.nbrProgress !== 0) {
                        this.nbrProgress--;
                    }
                };
                Progress.isCreating = false;
                Progress = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Progress);
                return Progress;
            })();
            exports_1("Progress", Progress);
        }
    }
});

//# sourceMappingURL=atexo-progress.service.js.map
