var R = require('ramda');
var util = require('./util');

var resEnd = R.joint([R.path('res.end'),R.path('res')], R.bind);
var reply = R.pipe(R.flip(R.tap), R.rPartial(util.compose2, resEnd));

module.exports = {
  resEnd: resEnd,
  reply: reply
};