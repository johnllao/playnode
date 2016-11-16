﻿(function () {

    var bookmarks = angular.module('bookmarks', []);

    var apiError = function (res) {
        alert(res.data);
    };

    bookmarks.controller('indexctrl', ['$http', '$scope', function (http, model) {

        model.bookmarks = []; 
        model.edit = function (bookmark) {
            alert(bookmark._id);
        };

        model.delete = function (bookmark) {
            alert(bookmark._id);
        };

        http.get('/api/bookmarks').then(function (res) {
            model.bookmarks = res.data;
        }, apiError);
    }]);

})();