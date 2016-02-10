System.register(['angular2/core', '../../../../common/pipe/atexo.pipe', './providers/panel-body-editor.provider', './entitys/note.entity'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, atexo_pipe_1, panel_body_editor_provider_1, note_entity_1;
    var PanelBodyEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (atexo_pipe_1_1) {
                atexo_pipe_1 = atexo_pipe_1_1;
            },
            function (panel_body_editor_provider_1_1) {
                panel_body_editor_provider_1 = panel_body_editor_provider_1_1;
            },
            function (note_entity_1_1) {
                note_entity_1 = note_entity_1_1;
            }],
        execute: function() {
            PanelBodyEditor = (function () {
                function PanelBodyEditor(panelBodyEditorProvider) {
                    this.editBoolean = false;
                    this.panelBodyEditorProvider = panelBodyEditorProvider;
                    this.notes = [];
                }
                PanelBodyEditor.prototype.ngOnInit = function () {
                    this.panelBodyEditorServiceGet(this.panelBodyObj.urlData);
                    return true;
                };
                PanelBodyEditor.prototype.panelBodyEditorServiceGet = function (url) {
                    var _this = this;
                    this.panelBodyEditorProvider.get(url).subscribe(function (res) {
                        if (res.status === 200) {
                            //this.notes = res.json();
                            res.json().forEach(function (obj) {
                                _this.notes.push(new note_entity_1.Note(obj, obj.content));
                            });
                        }
                    });
                };
                PanelBodyEditor.prototype.ondblclick = function (note) {
                    this.edit(note);
                    return false;
                };
                PanelBodyEditor.prototype.cancel = function (note) {
                    note.editing = false;
                    return false;
                };
                PanelBodyEditor.prototype.edit = function (note) {
                    note.editing = true;
                    return false;
                };
                PanelBodyEditor.prototype.save = function (note) {
                    note.editing = false;
                    note.data['content'] = note.draft;
                    return false;
                };
                PanelBodyEditor.prototype.remove = function (note) {
                    return false;
                };
                PanelBodyEditor.prototype.add = function () {
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PanelBodyEditor.prototype, "panelBodyObj", void 0);
                PanelBodyEditor = __decorate([
                    core_1.Component({
                        selector: 'panel-body-editor',
                        providers: [panel_body_editor_provider_1.PanelBodyEditorProvider]
                    }),
                    core_1.View({
                        templateUrl: './app/components/dashboard/components/panel-body/templates/panel-body-editor.tpl.html',
                        pipes: [atexo_pipe_1.ToClassPipe]
                    }), 
                    __metadata('design:paramtypes', [panel_body_editor_provider_1.PanelBodyEditorProvider])
                ], PanelBodyEditor);
                return PanelBodyEditor;
            })();
            exports_1("PanelBodyEditor", PanelBodyEditor);
        }
    }
});

//# sourceMappingURL=panel-body-editor.component.js.map
