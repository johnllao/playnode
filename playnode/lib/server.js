(function () {

    var timestamp = function () {

        var d = new Date();
        return d.getTime(); 
    };

    exports.start = function (completed) {

        var n = 1024 * 25;

        var run = function () {

            console.log('[' + timestamp() + '] processing');
            for (var a = 0; a < n; a++) {
                for (b = 0; b < n; b++) {
                }
            }
            console.log('[' + timestamp() + '] processed');
            completed();
        };

        setImmediate(run);

    };

})();