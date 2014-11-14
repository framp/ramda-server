var R = require('ramda');
var res = require('../lib/response');

var actions = [
  res.writeHead(404, {'Content-type': 'text/plain'}),
  res.end('404 - Page Not Found'),
  R.identity
];

module.exports = R.joint(actions);