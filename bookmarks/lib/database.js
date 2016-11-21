(function () {
    var db = require('mongodb').MongoClient;
    var MONGODB_URL = 'mongodb://localhost:27017/bookmarks';

    exports.get = function (collectionName, filter, populate) {
        
        db.connect(MONGODB_URL, function (connectErr, db, result) {
            var list = db.collection(collectionName)
                         .find(filter)
                         .toArray(function (findErr, data) {
                             populate(data);
                             db.close();
                         });
        });

    };

    exports.insert = function (collectionName, id, data, inserted) {

        db.connect(MONGODB_URL, function (connectErr, db, result) {
            db.collection(collectionName)
              .insertOne(data, { w: 1 }, function (insertErr, insertResult) {
                  
              });
            db.close();
            inserted();
        });

    };

})();