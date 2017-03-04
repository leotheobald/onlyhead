var write = require('../assets/scripts/write');
var text = require('../assets/scripts/text');
var today = require('../assets/scripts/date');

var assert = require('assert');


describe('write', function () {
    var div;

    beforeEach(function () {
        div = document.createElement('div');
        div.id = 'container';
        document.body.appendChild(div);
    });

    afterEach(function () {
        div.parentElement.removeChild(div);
    });

    it('Adds an h2 to container', function () {
        write();
        var el = div.querySelector('h2');
        assert(el, 'el exists');
    });

    it('Adds a span to h2', function () {
        write();
        var el = div.querySelector('span');
        assert(el, 'el exists');
    });

    it('Sets text to text.js module', function () {
        write();
        var el = div.querySelector('h2');
        assert(el.textContent === text, 'el text is ' + text);
    });

    it('Checks if date and format are correct and exist', function () {
        write();

        var el = div.querySelector('span');

        console.log(today, el.textContent);
        assert(el.textContent === today);
    });

});
