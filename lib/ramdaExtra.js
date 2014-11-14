var R = require('ramda');

R.joint = function(fnArray, target){
  return function(){
    var l = fnArray.length, i = l, rets = [];
    while (i--){
      rets.push(fnArray[l-i-1].apply(this, arguments));
    }
    if (target)
      return target.apply(this, rets);
    return rets[l-1];
  }
};

R.createObject = R.curry(function(keys, values){
  var o = {};
  for (var i in keys){
    o[keys[i]] = values[i]
  }
  return o;
});

R.createArray = function(){
  return Array.prototype.slice.call(arguments);
};
