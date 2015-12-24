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

  var _BaseRepository
    , Http;

  _BaseRepository = window.APP.repository._BaseRepository;
  Http = window.APP.interface.Http;

  function ReceitaRepository() {
    _BaseRepository.call(this);

    this.config.hostSearchAPI = window.APP.config.hostSearchAPI;
    this.config.username = window.APP.config.usernameSearchAPI;
    this.config.password = window.APP.config.passwordSearchAPI;
    this.config.path = '/recipes/recipe';
  }

  ReceitaRepository.prototype = new _BaseRepository();
  ReceitaRepository.prototype.constructor = ReceitaRepository;

  ReceitaRepository.prototype.search = function(query) {

    return Http.post(query, {
      url: this.config.hostSearchAPI + this.config.path + '/_search',
      headers: {
        Authorization: 'Basic ' + btoa(
          this.config.username + ':' + this.config.password
        )
      }
    });

  };

  window.APP.repository.ReceitaRepository = new ReceitaRepository();

})(this, document, this.$$);
