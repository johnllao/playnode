(function () {

    const express = require('express');
    const app = express();
    const router = express.Router();
    
    router.all('/', function(req, res, next) {
        res.json({ message: 'hello routers!!!' });
    });

    
    app.use(router);
    app.listen(8080);
    console.log('started');

})();