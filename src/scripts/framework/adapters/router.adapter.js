/**
 * Created by felul on 24/10/2015.
 */
(function(window, document, $$) {
  'use strict';

  var Router = {
    getCurrentState: getCurrentState,
    go: go
  };

  function getCurrentState() {
    return window.f7MainView.activePage;
  }

  function go(route) {
    window.f7MainView.router.loadPage(route);
  }

  window.APP.interface.Router = Router;

})(this, document, this.$$);
