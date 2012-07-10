/*! handshake - v0.1.0 - 2012-07-08
* https://github.com/stephenbinns/handshake
* Copyright (c) 2012 Stephen Binns; Licensed MIT */

(function(exports) {


	var isNull = function(value) {
		return value === null;
	};

	var isUndefined = function(value) {
		return typeof (value) === "undefined";
	};

	var isNotNull = function(value){
		return !isNull(value);
	};

	var isNotUndefined = function(value){
		return !isUndefined(value);
	};

	function isNotNullOrUndefined(value){
		return isNotNull(value) && isNotUndefined(value);
	}

	function expect(operation, message){
		if (operation === false){
			throw new Error(message);
		}
	}

	
	exports.preconditions = function(){

		var api = {
			isNotNullOrUndefined : function(value, message){
				expect(isNotNullOrUndefined(value), message);
			}
		};

		return api;
	};

	exports.postconditions = function(){

		var api = {
			isNotNullOrUndefined : function(func, message){
				var outcome = func();
				expect(isNotNullOrUndefined(outcome), message);
				return outcome;
			}
		};

		return api;
	};

}(typeof exports === 'object' && exports || this));
