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

  var Router = {
    getCurrentState: getCurrentState,
    go: go
  };

  function getCurrentState() { }
  function go(route) { }

  window.APP.interface.Router = Router;

})(this, document, this.$$);


