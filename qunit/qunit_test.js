/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('preconditions');

  test('null or undefined', 3, function() {
    ok(preconditions('foo').isNotNullOrUndefined());
    raises(function() {preconditions(null).isNotNullOrUndefined(); });
    raises(function() {preconditions(undefined).isNotNullOrUndefined(); });
  });

  test('not empty', 5, function() {
    ok(preconditions('foo').isNotEmpty());
    raises(function() {preconditions(null).isNotEmpty(); });
    raises(function() {preconditions(undefined).isNotEmpty(); });
    raises(function() {preconditions([]).isNotEmpty(); });
    raises(function() {preconditions('').isNotEmpty(); });
  });

  test('true and false', 4, function() {
    ok(preconditions(true).isTrue());
    raises(function() {preconditions(false).isTrue(); });
    ok(preconditions(false).isFalse());
    raises(function() {preconditions(true).isFalse(); });
  });

  test('type int', 5, function(){
    ok(preconditions(1).isInt());
    raises(function() {preconditions('1').isInt();});
    raises(function() {preconditions(true).isInt();});
    raises(function() {preconditions([]).isInt();});
    raises(function() {preconditions(null).isInt();});
  });
  
  test('type bool', 5, function(){
    ok(preconditions(true).isBoolean());
    raises(function() {preconditions(1).isBoolean();});
    raises(function() {preconditions('1').isBoolean();});
    raises(function() {preconditions([]).isBoolean();});
    raises(function() {preconditions(null).isBoolean();});
  });
  test('type string', 5, function(){
    ok(preconditions('1').isString());
    raises(function() {preconditions(1).isString();});
    raises(function() {preconditions(true).isString();});
    raises(function() {preconditions([]).isString();});
    raises(function() {preconditions(null).isString();});
  });
  test('type array', 5, function(){
    ok(preconditions([]).isArray());
    raises(function() {preconditions(1).isArray();});
    raises(function() {preconditions('1').isArray();});
    raises(function() {preconditions(true).isArray();});
    raises(function() {preconditions(null).isArray();});
  });

}(jQuery));
