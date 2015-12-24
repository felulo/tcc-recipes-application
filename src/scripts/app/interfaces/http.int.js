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

  function Http() { }

  Http.get = function(options) { };
  Http.post = function(data, options) { };
  Http.put = function(data, options) { };
  Http.delete = function(options) { };

  window.APP.interface.Http = Http;

})(this, document, this.$$);
