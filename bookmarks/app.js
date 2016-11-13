(function () {
    var express = require('express');
    var routes = require('./lib/routes');
    var app = express();

    app.set('views', './views');
    app.set('view engine', 'jade');

    app.use(express.static('./public'));

    routes.init(app);

    app.listen(8080);

    console.log('started...');

})();