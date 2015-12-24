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

  var config;

  config = {
    hostAPI: 'https://tcc-recipes-admin-server.herokuapp.com',

    hostSearchAPI: 'http://fili-us-east-1.searchly.com',
    usernameSearchAPI: 'paas',
    passwordSearchAPI: '2709e4e93fcce5bd1226a508fb18cad4'
  };

  window.APP.config = config;
})(this, document, this.$$);
