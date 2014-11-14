var R = require('ramda');

var log = R.bind(console.log, console);
var logProperties = ['req.url', 'req.method', 'req.statusCode'];
var logger = R.joint(R.map(R.path, logProperties), log);

var actions = [
  logger,
  R.identity
]

module.exports = R.joint(actions);