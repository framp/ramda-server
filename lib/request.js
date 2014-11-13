var R = require('ramda');
var util = require('./util');

var urlMatch = R.pipe(R.eq, R.rPartial(util.compose2, R.path('req.url')));

module.exports = {
  urlMatch: urlMatch
};