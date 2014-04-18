var _ = require('underscore');

var test = {
    between: function(num, a, b) {
        if (a === b) return "max and min are the same";
        return (a < b) ? (num > a && num < b) : (num < a && num > b);
    }
}

module.exports = test;