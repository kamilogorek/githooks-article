var test = require('tape');
var App = require('./app.js');

test('App object is testable', function (t) {
    var app = new App();

    t.plan(1);
    t.deepEqual(Object.keys(app), ['foo', 'bar', 'baz']);
    t.end();
});
