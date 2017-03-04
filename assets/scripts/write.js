var text = require('./text');
var date = require('./date');

module.exports = function () {
    var heading = document.createElement('h2');
    var spanTag = document.createElement('span');

    spanTag.textContent = date;
    heading.textContent = text;
    document.getElementById('container').appendChild(heading);
    document.getElementById('container').appendChild(spanTag);
};
