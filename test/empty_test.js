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

exports['isNotEmpty'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'valid': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions('foo').isNotEmpty();});
    test.done();
  },
  'string array' : function(test) {
    test.expect(1);
    test.doesNotThrow(function() { handshake.preconditions(['dog', 'cow']).isNotEmpty();});
    test.done();
  },
  'null': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(null).isNotEmpty();});
    test.done();
  },
  'blank string' : function(test){
    test.expect(1);
    test.throws(function() { handshake.preconditions('').isNotEmpty();});
    test.done();
  },
  'empty array' : function(test) {
    test.expect(1);
    test.throws(function() { handshake.preconditions([]).isNotEmpty();});
    test.done();
  
  },
  'undefined': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions(undefined).isNotEmpty();});
    test.done();
  },
  'no param': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {handshake.preconditions().isNotEmpty();});
    test.done();
  }
};
