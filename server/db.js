module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');

    var panel_json = require('./json/panel');
    var news_json = require('./json/news');
    var bienvenue_json = require('./json/bienvenue');
    var blocnotes_json = require('./json/blocnotes');

    return {
        panel: panel_json.panel,

        search: _.times(6, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),

        news: news_json.news,

        bienvenue: bienvenue_json.bienvenue,

        blocnotes: blocnotes_json.blocnotes
    }
}