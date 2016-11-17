(function () {

    var db = require('./database')

    var getBookmarks = function (req, res) {

        db.get('bookmarks', {}, function (data) {
            res.json(data);
        });

    };

    var routes = function (app) {

        app.get('/api/bookmarks', getBookmarks);

    };

    exports.init = routes;
})();