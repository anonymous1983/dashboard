System.register(['./atexo/atexo-enum.constant', './atexo/atexo-path.constant', './atexo/atexo-rest.constant'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (atexo_enum_constant_1_1) {
                exportStar_1(atexo_enum_constant_1_1);
            },
            function (atexo_path_constant_1_1) {
                exportStar_1(atexo_path_constant_1_1);
            },
            function (atexo_rest_constant_1_1) {
                exportStar_1(atexo_rest_constant_1_1);
            }],
        execute: function() {
        }
    }
});
/*import {AtexoPathConstant} from './atexo/atexo-path.constant';
import {AtexoRestConstant} from './atexo/atexo-rest.constant';

export const AtexoConstant = {
    path: AtexoPathConstant,
    rest: AtexoRestConstant
};*/ 

//# sourceMappingURL=atexo.constant.js.map
