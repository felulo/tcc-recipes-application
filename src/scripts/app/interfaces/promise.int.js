/**
 * Created by felul on 23/10/2015.
 */
(function(window, document, $$) {
  'use strict';

  if (!window.APP)
    window.APP = {
      business: {},
      interface: {},
      repository: {},
      services: {}
    };

  function Promise(callback) { }

  Promise.all = function(promises) { };

  Promise.prototype.then = function(successCallback, errorCallback) { };
  Promise.prototype.success = function(successCallback) { };
  Promise.prototype.catch = function(errorCallback) { };

  window.APP.interface.Promise = Promise;

})(this, document, this.$$);
