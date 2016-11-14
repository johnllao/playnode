(function () {

    var data = [
        {
            title: 'NodeJS API',
            description: 'The goal of this documentation is to comprehensively explain the Node.js API, both from a reference as well as a conceptual point of view. Each section describes a built-in module or high-level concept.',
            link: 'https://nodejs.org/api/documentation.html'
        },
        {
            title: 'NodeJS MongoDB',
            description: 'Node JS MongoDB quick start guide. The guide will show you how to set up a simple application using Node.js and MongoDB. Its scope is only how to set up the driver and perform the simple CRUD operations. For more in-depth coverage, see the tutorials.',
            link: 'http://mongodb.github.io/node-mongodb-native/2.2/quick-start'
        }
    ];

    var indexView = function (req, res) {
        res.render('index');
    };

    var bookmarksApi = function (req, res) {
        res.json(data);
    };

    var routes = function (app) {

        app.get('/', indexView);
        app.get('/api/bookmarks', bookmarksApi);

    };

    exports.init = routes;
})();