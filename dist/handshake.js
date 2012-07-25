/*! handshake - v0.1.0 - 2012-07-25
* https://github.com/stephenbinns/handshake
* Copyright (c) 2012 Stephen Binns; Licensed MIT */

(function(exports, undefined) {
  'use strict';

  // Tests that the value is null.
  // @param value the value to test.
  // @returns true if the value is null otherwise; false.
  function isNull(value) {
    return value === null;
  }
  // Tests that the value is undfined.
  // @param value the value to test.
  // @returns true if the value is undefined otherwise; false.
  function isUndefined(value) {
    return ofType(typeof(undefined), value);
  }
  // Tests that the value is not null.
  // @param value the value to test.
  // @returns true if the value is not null otherwise; false.
  function isNotNull(value){
    return !isNull(value);
  }
  // Tests that the value is not undefined.
  // @param value the value to test.
  // @returns true if the value is not undefined otherwise; false.
  function isNotUndefined(value){
    return !isUndefined(value);
  }
  // Tests that the value is not undefined or null.
  // @param value the value to test.
  // @returns true if the value is not undefined or null otherwise; false.
  function isNotNullOrUndefined(value){
    return isNotNull(value) && isNotUndefined(value);
  }
  // Tests that the value is not empty.
  // @param value to test.
  // @returns true if the value contains no items.
  function isEmpty(value){
    return value.hasOwnProperty('length') && value.length === 0;
  }

  // Tests that the value of the same type
  // @param typeName the name of the type to test.
  // @param value the value to test.
  // @returns true if value is the same type as typeName.
  function ofType(typeName, value){
    return typeof (value) === typeName;
  }

  // Asserts that a condition is true
  // @param operation the operation to test.
  // @param message the message to throw.
  // @exception if operation is false.
  function expect(operation, message){
    if (operation === false){
      throw new Error(message);
    }
  }
  
  // Creates a new precondition chain for the value
  // @param value the value to test.
  // @param paramName the string name of the parameter.
  // @returns a new preconditions object
  exports.preconditions = function(value, paramName){
    paramName = paramName  || 'unnamed';

    var api = {
      // Asserts that the condition value is not undefined or null.
      // @param message - optional override for exception message.
      // @exception thrown if the value is undefined or null.
      isNotNullOrUndefined : function(message){
        message = message || 'Argument: ' + paramName + ' may not be null or undefined';
        expect(isNotNullOrUndefined(value), message);
        return api;
      },
      // Asserts that the condition value is not null.
      // @param message - optional override for exception message.
      // @exception thrown if the value is null.
      isNotNull : function(message){
        message = message || 'Argument: ' + paramName + ' may not be null';
        expect(isNotNull(value), message);
        return api;
      },
      // Asserts that the condition value is not undefined.
      // @param message - optional override for exception message.
      // @exception thrown if the value is undefined.
      isNotUndefined : function(message){
        message = message || 'Argument: ' + paramName + ' may not be undefined';
        expect(isNotUndefined(value), message);
        return api;
      },
      // Asserts that the condition value is not empty.
      // @param message - optional override for exception message.
      // @exception thrown if the value is empty.
      isNotEmpty : function(message) {
        message = message || 'Argument: ' + paramName + ' may not be empty';
        expect(isEmpty(value) === false, message);
        return api;
      },
      // Asserts that the condition value is of type string.
      // @param message - optional override for exception message.
      // @exception thrown if the value not of type string.
      isString : function(message) {
        message = message || 'Argument: ' + paramName + ' must be a string';
        var string = 'string';
        expect(ofType(typeof(string), value));
        return api;
      },
      // Asserts that the condition value is of type int.
      // @param message - optional override for exception message.
      // @exception thrown if the value not of type int.
      isInt : function(message) {
        message = message || 'Argument: ' + paramName + ' must be an int';
        var interger = 1;
        expect(ofType(typeof(interger),value));
        return api;
      },
      // Asserts that the condition value is of type bool.
      // @param message - optional override for exception message.
      // @exception thrown if the value not of type bool.
      isBoolean : function(message) {
        message = message || 'Argument: ' + paramName + ' must be a bool';
        var bool = true;
        expect(ofType(typeof(bool), value));
        return api;
      },
      // Asserts that the condition value is an array.
      // @param message - optional override for exception message.
      // @exception thrown if the value not an array.
      isArray : function(message) {
        message = message || 'Argument: ' + paramName + ' must be an array';
        var array = [];
        expect(ofType(typeof(array), value) && isNotNull(value)) ;
        return api;
      },
      // Asserts that the condition value is true.
      // @param message - optional override for exception message.
      // @exception thrown if the value is not true.
      isTrue : function(message){
        message = message || 'Argument: ' + paramName + ' must be true';
        expect(value === true);
        return api;
      },
      // Asserts that the condition value is false.
      // @param message - optional override for exception message.
      // @exception thrown if the value is not false.
      isFalse : function(message){
        message = message || 'Argument: ' + paramName + ' must be false';
        expect(value === false);
        return api;
      }
    };

    return api;
  };

  // Creates a new postcondition chain for the function.
  // @param delegate the delegate function to execute and test return on.
  // @param paramName the string name of the parameter.
  // @returns a new preconditions object
  exports.postconditions = function(delegate, paramName){
    var value = delegate();

    var api = exports.preconditions(value, paramName);
    
    // Returns the value from the result of executing the
    // delegate.
    // @return the returned value from the delegate function.
    api.invoke = function(){
      return value;
    };

    return api;
  };

}(typeof exports === 'object' && exports || this));
