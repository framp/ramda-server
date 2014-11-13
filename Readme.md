#R.Server

Just a proof of concept (for now).

A server made only by composing function (using the wonderful [ramda.js](http://ramdajs.com/)).

##Design
Every middleware is a function with the signature `Object -> Object` where Object contains node's `req` and `res`.

At runtime all the middlewares are composed in a single function which is then passed to `createServer`.

There are 4 middlewares as of now:

 - objectify: makes an object from `req` and `res` (to avoid returning 2 values every time)
 - logger: logs some basic data about the request
 - bye: an example of url matching which optionally sends the word `"bye"` if you're on `/bye`
 - hello: the default handler, simply returns `"hello"`
 
##What's the point?
Fun. And investigating functional composition in JavaScript, while getting familiar with [ramda.js](http://ramdajs.com/)).
In particular, I'm interested in evaluating the readability of the resulting code - for developers with or without functional programming experience.

##Ramda extra
There are a couple of functions which I think are pretty essentials.
I monkeypatched `R` with a couple of functions (available in `lib/ramdaExtra`):

 - R.joint: It takes an array of functions and a target function, it executes all the functions and pipe their return values to the target function. It's essential to control the flow (together with R.pipe) as it let you use a value several times
 - R.createObject: It takes an array of keys and an arrays of values and returns an object 
 
##Performance
Performance are out of scope of the test - and they shouldn't be exciting (probably worse than the node.js hello world). 
I suggest reading those tips [by Petka Antonov and the bluebird team](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)
