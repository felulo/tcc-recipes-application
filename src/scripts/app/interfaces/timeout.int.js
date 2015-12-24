/**
 * Created by felul on 06/11/2015.
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

  function Timeout(callback, time) { }

  window.APP.interface.Timeout = Timeout;

})(this, document, this.$$);
