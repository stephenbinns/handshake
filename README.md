# Handshake

Code contracts for javascript - implemented through a series of precondition validators.

[![Build Status](https://secure.travis-ci.org/stephenbinns/handshake.png?branch=master)](http://travis-ci.org/stephenbinns/handshake)

## Getting Started
### On the server
Install the module with: `npm install handshake`

```javascript
var handshake = require('handshake');
handshake.preconditions(true, 'myVar').isTrue(); // "does not throw"
handshake.preconditions(false, 'myVar').isTrue(); // "throws"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/stephenbinns/handshake/master/dist/handshake.min.js
[max]: https://raw.github.com/stephenbinns/handshake/master/dist/handshake.js

In your web page:

```html
<script src="dist/handshake.min.js"></script>
<script>
preconditions(true, 'myVar').isTrue(); // "does not throw"
preconditions(false, 'myVar').isTrue(); // "throws"
</script>
```

In your code, you can attach handshake's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/handshake.min.js"></script>
<script>
Bocoup.utils.preconditions(true, 'myVar').isTrue(); // "does not throw"
Bocoup.utils.preconditions(false, 'myVar').isTrue(); // "throws"
</script>
```

## Documentation

Preconditions are a method of ensuring that you can trust your inputs, they act as 
a barrier between untrusted calls to your methods and the script internals.

Setting up a precondition is simple

```javascript
var foo = 'foo';

function myMethod(value) {
    handshake.precondition(value, 'values name').isNotNullOrUndefined();
    
    // we can now trust value will never be null or undefined.
    return value;
}

myMethod(foo);
myMethod(null); // will throw.
myMethod(); // will throw.

```

Preconditions required you to at least provide a value to validate but also will take a name for the attribute

`precondition('foo','myFoo') // value is 'foo' argument name is 'myFoo'`

The argument name is used in the default error messages.

It is suggested that you handle these exceptions in a sensible way, for example
on the server logging them or on the browser using an alert (in development) or
alternate means in a production environment.

The following conditions can be applied as a precondition of an argument.

* `isNotNullOrUndefined()` - will throw if the value is `null` or `undefined`.
* `isNotNull()` - will throw if the value is `null`.
* `isNotUndefined()` - will throw is the value is `undefined`.
* `isNotEmpty()` - will throw if the value does not have a `length` attribute or if that attribute returns a length of less than 1.
* `isString()` - will throw if the value is not of type `string`.
* `isInt()` - will throw if the value is not of type `int`.
* `isBoolean()` - will throw if the value is not of type `bool`.
* `isArray()` - will throw if the value is not an `array` type.
* `isTrue()` - will throw if the value is not `true`, this will not allow truthy values (since these are a path to madness).
* `isFalse()` - will throw if the value is not `false`.
 
All methods can be chained like so:

`precondition('foo').isNotNullOrUndefined().isString().isNotEmpty()`

Preconditions will fail fast so it best practice to use the most general condition to least.

There are sensible defaults for error messages but should you wish to change them the conditions will accept a string
with a new message.

`precondition('').isNotEmpty('Argument: foo should have been filled in`);`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet - pre beta - here be dragons.)_

## License
Copyright (c) 2012 Stephen Binns  
Licensed under the MIT license.
