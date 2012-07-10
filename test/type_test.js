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

exports['isTypeOf'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'string is a string': function(test) {
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions('foo').isString();});
    test.done();
  },
  'int is not a string' : function(test) {
    test.expect(4);
    // tests here
    test.throws(function() {handshake.preconditions(1).isString();});
    test.throws(function() {handshake.preconditions(true).isString();});
    test.throws(function() {handshake.preconditions([]).isString();});
    test.throws(function() {handshake.preconditions(null).isString();});
    test.done();
  },
  'int is an int' : function(test){
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions(1).isInt();});
    test.done();
  },
  'not an int' : function(test) {
    test.expect(4);
    // tests here
    test.throws(function() {handshake.preconditions('1').isInt();});
    test.throws(function() {handshake.preconditions(true).isInt();});
    test.throws(function() {handshake.preconditions([]).isInt();});
    test.throws(function() {handshake.preconditions(null).isInt();});
    test.done();
  },
  'bool is a bool' : function(test){
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions(true).isBoolean();});
    test.done();
  },
  'not an bool' : function(test) {
    test.expect(5);
    // tests here
    test.throws(function() {handshake.preconditions('1').isBoolean();});
    test.throws(function() {handshake.preconditions('true').isBoolean();});
    test.throws(function() {handshake.preconditions(1).isBoolean();});
    test.throws(function() {handshake.preconditions([]).isBoolean();});
    test.throws(function() {handshake.preconditions(null).isBoolean();});
    test.done();
  },
  'array is an array' : function(test){
    test.expect(1);
    // tests here
    test.doesNotThrow(function() {handshake.preconditions(['cow', 1, true]).isArray();});
    test.done();
  },
  'not an array' : function(test) {
    test.expect(4);
    // tests here
    test.throws(function() {handshake.preconditions('1 array').isArray();});
    test.throws(function() {handshake.preconditions(true).isArray();});
    test.throws(function() {handshake.preconditions(1).isArray();});
    test.throws(function() {handshake.preconditions(null).isArray();});
    test.done();
  }
};
