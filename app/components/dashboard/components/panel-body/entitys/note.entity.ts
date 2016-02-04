export class Note {
    completed:Boolean;
    editing:Boolean;
    deleted:Boolean;

    private _data:Object;

    get data() {
        return this._data;
    }

    set data(value:Object) {
        this._data = value;
    }

    constructor(obj:Object) {
        this.completed = false;
        this.editing = false;
        this.deleted = false;
        this.data = obj;
    }

}