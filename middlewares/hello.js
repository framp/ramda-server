var R = require('ramda');
var res = require('../lib/response');
var req = require('../lib/request');

var actions = [
  res.writeHead(200, {'Content-type': 'text/plain'}), 
  R.and(req.urlMatch('/'), res.end('hello world')),
  R.identity
];

module.exports = R.joint(actions);