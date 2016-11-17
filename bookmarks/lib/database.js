(function () {
    var db = require('mongodb').MongoClient;
    var MONGODB_URL = 'mongodb://localhost:27017/bookmarks';

    exports.get = function (collectionName, filter, populate) {
        // Use connect method to connect to the server
        db.connect(MONGODB_URL, function (err, db, result) {
            var list = db.collection(collectionName)
                .find(filter)
                .toArray(function (err, data) {
                    populate(data);
                    db.close();
                });
        });
    };

})();