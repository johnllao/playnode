(function () {

    const EventEmitters = require('events');

    class Server extends EventEmitters { };

    const server = new Server();
    server.on('start', () => {

        console.log('started #1');

    });

    server.on('start', () => {

        console.log('started #2');

    });

    server.emit('start');

})();