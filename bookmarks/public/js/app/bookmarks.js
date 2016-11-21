(function () {

    var bookmarks = angular.module('bookmarks', []);

    var apiError = function (res) {
        alert(res.data);
    };

    bookmarks.controller('bookmarksctrl', ['$http', '$scope', function (http, model) {

        model.bookmarks = []; 
        model.selectedBookmark = {};

        model.add = function () {
            model.selectedBookmark = {};
        };

        model.edit = function (bookmark) {
            var b = {
                _id: bookmark._id,
                title: bookmark.title,
                description: bookmark.description,
                link: bookmark.link
            };
            model.selectedBookmark = b;
        };

        model.delete = function (bookmark) {
            model.selectedBookmark = bookmark;
        };

        http.get('/api/bookmarks').then(function (res) {
            model.bookmarks = res.data;
        }, apiError);
    }]);

})();