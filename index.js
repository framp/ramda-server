var R = require('ramda');
var http = require('http');

require('./lib/ramdaExtra');

var middlewares = [
  require('./middlewares/objectify'), 
  require('./middlewares/logger'),
  require('./middlewares/hello'),
  require('./middlewares/404')
];

var server = R.apply(R.pipe, middlewares);

http.createServer(server).listen(3000);