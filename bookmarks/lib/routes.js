(function () {

    var db = require('mongodb').MongoClient;
    var MONGODB_URL = 'mongodb://localhost:27017/bookmarks';

    var bookmarksApi = function (req, res) {

        // Use connect method to connect to the server
        db.connect(MONGODB_URL, function (err, db) {
            var list = db.collection('bookmarks').find({}).limit(20).toArray(function (err, data) {
                res.json(data);
                db.close();
            });
        });
    };

    var routes = function (app) {

        app.get('/api/bookmarks', bookmarksApi);

    };

    exports.init = routes;
})();