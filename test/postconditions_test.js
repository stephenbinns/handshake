/*global require:true */
var handshake = require('../lib/handshake.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

/*exports['postconditions'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'valid': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.postconditions(function() {return 'foo';}).isNotNullOrUndefined();});
    test.done();
  },
  'valid-with-argname': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.postconditions(function() {return 'foo';}, 'arg').isNotNullOrUndefined();});
    test.done();
  },
  'invoker' : function(test) {
    test.expect(2);
    // tests here

    var outcome;
    var expected = 'test';
    
    var testFunction = function() { return expected; };
    
    test.doesNotThrow(function() {
      outcome = handshake.postconditions(testFunction).isNotEmpty().invoke();
    });
    test.strictEqual(outcome, expected);
    test.done();
  }
};*/
