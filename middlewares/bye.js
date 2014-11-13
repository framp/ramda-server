var R = require('ramda');
var reply = require('../lib/response').reply;
var urlMatch = require('../lib/request').urlMatch;

var maybeReply = R.and(urlMatch('/bye'), reply('bye'));

module.exports = R.joint([maybeReply, R.identity]);