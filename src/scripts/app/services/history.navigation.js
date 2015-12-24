/**
 * Created by felul on 04/11/2015.
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

  var HistoryNavigation
    , Router

    , history;

  Router = window.APP.interface.Router;

  history = [];

  HistoryNavigation = {
    back: back,
    go: go
  };

  function back() {

    var state;

    state = history.pop();

    Router.go(state);

  }

  function go(currentState, currentParams, toState, toParams) {

    history.push({
      name: currentState,
      params: currentParams
    });

    Router.go({
      name: toState,
      params: toParams
    });

  }

  window.APP.services.HistoryNavigation = HistoryNavigation;

})(this, document, this.$$);
