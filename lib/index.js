'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = require('./modules/header');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.renderTemplate();
    }

    _createClass(App, [{
        key: 'renderTemplate',
        value: function renderTemplate() {
            var template = '\n        <h1>' + _header.headerText.pageTitle + '</h1>\n        <p>' + _header.headerText.pageDescription + '</p>\n        ';

            document.body.innerHTML = template;
        }
    }]);

    return App;
}();

new App();