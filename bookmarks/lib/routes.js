(function () {

    var indexView = function (req, res) {
        res.render('index');
    };

    var helpVersionApi = function (req, res) {
        res.json({ version: '1.0.0' });
    };

    var routes = function (app) {

        app.get('/', indexView);
        app.get('/api/help/version', helpVersionApi);

    };

    exports.init = routes;
})();