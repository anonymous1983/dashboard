module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');

    var panel_json = require('./json/panel');

    return {
        panel: panel_json.panel,

        search: _.times(6, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}