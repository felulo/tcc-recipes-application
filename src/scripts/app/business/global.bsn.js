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

  var _BaseBusiness

    , Router
    , HistoryNavigation;

  _BaseBusiness = window.APP.business._BaseBusiness;

  Router = window.APP.interface.Router;
  HistoryNavigation = window.APP.services.HistoryNavigation;

  function GlobalBusiness() {
    _BaseBusiness.call(this);
  }

  GlobalBusiness.prototype = new _BaseBusiness();
  GlobalBusiness.prototype.constructor = GlobalBusiness;

  GlobalBusiness.prototype.resetBusiness = function() {

    this.current = {
      recipe: {},
      category: {},
      ingredients: []
    }

  };

  window.APP.business.GlobalBusiness = new GlobalBusiness();

})(this, document, this.$$);
