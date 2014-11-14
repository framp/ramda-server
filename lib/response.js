var R = require('ramda');
var util = require('./util');

var resEnd = R.joint([R.path('res.end'),R.path('res')], R.bind);
var resWriteHead = R.joint([R.path('res.writeHead'),R.path('res')], R.bind);

var end = R.pipe(R.createArray, R.flip(R.apply), R.rPartial(util.compose2, resEnd));
var writeHead = R.pipe(R.createArray, R.flip(R.apply), R.rPartial(util.compose2, resWriteHead));

module.exports = {
  end: end,
  writeHead: writeHead
};