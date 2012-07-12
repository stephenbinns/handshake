/*! Handshake - v0.1.0 - 2012-07-12
* https://github.com/stephenbinns/handshake
* Copyright (c) 2012 Stephen Binns; Licensed MIT */

(function(exports, undefined) {
  'use strict';

  // ASSERTIONS
  function isNull(value) {
    return value === null;
  }

  function isUndefined(value) {
    return ofType(typeof(undefined), value);
  }

  function isNotNull(value){
    return !isNull(value);
  }

  function isNotUndefined(value){
    return !isUndefined(value);
  }

  function isNotNullOrUndefined(value){
    return isNotNull(value) && isNotUndefined(value);
  }
  
  function isEmpty(value){
    return value.hasOwnProperty('length') && value.length === 0;
  }

  function ofType(typeName, value){
    return typeof (value) === typeName;
  }


  // EXCEPTION HELPER
  function expect(operation, message){
    if (operation === false){
      throw new Error(message);
    }
  }
  
  exports.preconditions = function(value, paramName){
    paramName = paramName  || 'unnamed';

    var api = {
      isNotNullOrUndefined : function(message){
        message = message || 'Argument: ' + paramName + ' may not be null or undefined';
        expect(isNotNullOrUndefined(value), message);
        return api;
      },
      isNotNull : function(message){
        message = message || 'Argument: ' + paramName + ' may not be null';
        expect(isNotNull(value), message);
        return api;
      },
      isNotUndefined : function(message){
        message = message || 'Argument: ' + paramName + ' may not be undefined';
        expect(isNotUndefined(value), message);
        return api;
      },
      isNotEmpty : function(message) {
        message = message || 'Argument: ' + paramName + ' may not be empty';
        expect(isEmpty(value) === false, message);
        return api;
      },
      isString : function(message) {
        message = message || 'Argument: ' + paramName + ' must be a string';
        var string = 'string';
        expect(ofType(typeof(string), value));
        return api;
      },
      isInt : function(message) {
        message = message || 'Argument: ' + paramName + ' must be an int';
        var interger = 1;
        expect(ofType(typeof(interger),value));
        return api;
      },
      isBoolean : function(message) {
        message = message || 'Argument: ' + paramName + ' must be a bool';
        var bool = true;
        expect(ofType(typeof(bool), value));
        return api;
      },
      isArray : function(message) {
        message = message || 'Argument: ' + paramName + ' must be an array';
        var array = [];
        expect(ofType(typeof(array), value) && isNotNull(value)) ;
        return api;
      },
      isTrue : function(message){
        message = message || 'Argument: ' + paramName + ' must be true';
        expect(value === true);
        return api;
      },
      isFalse : function(message){
        message = message || 'Argument: ' + paramName + ' must be false';
        expect(value === false);
        return api;
      }
    };

    return api;
  };

  exports.postconditions = function(delegate){
    var value = delegate();
    var api = exports.preconditions(value);
    
    api.invoke = function(){
      return value;
    };

    return api;
  };

}(typeof exports === 'object' && exports || this));
