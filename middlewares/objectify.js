var R = require('ramda');

var objectify = R.apply(R.createObject, R.of(['req','res']));

module.exports = R.pipe(R.createArray, objectify);