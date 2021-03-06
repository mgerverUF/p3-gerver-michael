'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create a class called Header with two properties
var Header = function Header(pageTitle, pageDescription) {
    _classCallCheck(this, Header);

    this.pageTitle = pageTitle;
    this.pageDescription = pageDescription;
};

// Create a variable that's a new instance of Header


var headerText = exports.headerText = new Header('What\'s For Lunch?', 'Can\'t decide what to eat? Use our random food generator for a great lunchtime suggestion.');