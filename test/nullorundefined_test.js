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

exports['isNotNullOrUndefined'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'valid': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions('foo').isNotNullOrUndefined();});
    test.done();
  },
  'null': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(null).isNotNullOrUndefined();});
    test.done();
  },
  'blank string' : function(test){   
    test.expect(1);
    test.doesNotThrow(function() { handshake.preconditions('').isNotNullOrUndefined();});
    test.done();
  },
  'empty array' : function(test) {
    test.expect(1);
    test.doesNotThrow(function() { handshake.preconditions([]).isNotNullOrUndefined();});
    test.done();
  
  },
  'undefined': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(undefined).isNotNullOrUndefined();});
    test.done();
  },
  'no param': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions().isNotNullOrUndefined();});
    test.done();
  }
};
