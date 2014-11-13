var R = require('ramda');

var log = R.bind(console.log, console);
var logProperties = ['req.url', 'req.method', 'req.statusCode'];
var logger = R.joint(R.map(R.path, logProperties), log);

module.exports = R.joint([logger, R.identity]);