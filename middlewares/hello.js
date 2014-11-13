var R = require('ramda');
var reply = require('../lib/response').reply;

module.exports = R.joint([reply('hello'), R.identity]);