(function () {
    var express = require('express');
    var pug = require('pug');

    var app = express();

    app.set('views', './views');
    app.set('view engine', 'pug');

    app.use(express.static('./public'));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/api/help/version', function (req, res) {
        res.json({ version: '1.0.0' });
    });

    app.listen(8080);

    console.log('started...');

})();