(function (self) {

    let server = require('./lib/server')

    server.start(() => {
        console.log('completed');
    });

    console.log('done');

})(this);