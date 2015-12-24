/**
 * Created by felul on 24/10/2015.
 */
(function(window, document, $$) {
  'use strict';

  var Promise;

  Promise = window.APP.interface.Promise;

  function Http(options) {

    return new Promise(function(success, reject) {

      var config;

      config = options;

      options.success = function(data) {
        success(data);
      };
      options.error = function(error) {
        reject(error);
      }

      $$.ajax(options);

    });

  }

  function fnBaseHttp(options) {

    if (!options)
      throw new Error('Passar o options!');

    return Http(options);

  }

  Http.get = function(options) {
    options.method = 'GET';

    return fnBaseHttp(options);
  };

  Http.post = function(data, options) {
    options.data = JSON.stringify(data);
    options.dataType = 'json';
    options.method = 'POST';

    return fnBaseHttp(options);
  };

  Http.put = function(data, options) {
    options.data = JSON.stringify(data);
    options.dataType = 'json';
    options.method = 'PUT';

    return fnBaseHttp(options);
  };

  Http.delete = function(options) {
    options.method = 'DELETE';

    return fnBaseHttp(options);
  };

  window.APP.interface.Http = Http;

})(this, document, this.$$);
