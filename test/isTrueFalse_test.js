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

exports['isTrue/isFalse'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'true is true': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions(true).isTrue();});
    test.done();
  },
  'false is not true': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(false).isTrue();});
    test.done();
  },
  'false is false': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions(false).isFalse();});
    test.done();
  },
  'true is not false': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(true).isFalse();});
    test.done();
  }
};
