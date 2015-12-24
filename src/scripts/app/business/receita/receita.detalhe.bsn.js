/**
 * Created by felul on 24/10/2015.
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
    , GlobalBusiness;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  function ReceitaDetalhesBusiness() {
    _BaseBusiness.call(this);
  }

  ReceitaDetalhesBusiness.prototype = new _BaseBusiness();
  ReceitaDetalhesBusiness.prototype.constructor = ReceitaDetalhesBusiness;

  ReceitaDetalhesBusiness.prototype.resetBusiness = function() {

    this.recipe = GlobalBusiness.current.recipe;

  };

  if (!window.APP.business.Receita)
    window.APP.business.Receita = {};

  window.APP.business.Receita.ReceitaDetalhesBusiness = ReceitaDetalhesBusiness;

})(this, document, this.$$);
