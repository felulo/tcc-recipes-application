/**
 * Created by felul on 27/10/2015.
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

  var Http;

  Http = window.APP.interface.Http;

  function _BaseRepository() {
    this.config = {
      hostAPI: window.APP.config.hostAPI,
      path: ''
    };
  }

  window.APP.repository._BaseRepository = _BaseRepository;

})(this, document, this.$$);
