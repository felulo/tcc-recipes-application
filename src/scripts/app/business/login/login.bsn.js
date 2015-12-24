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
    , GlobalBusiness

    , FacebookConnect;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  FacebookConnect = window.APP.services.FacebookConnect;

  function LoginBusiness() {
    _BaseBusiness.call(this);
  }

  LoginBusiness.prototype = new _BaseBusiness();
  LoginBusiness.prototype.constructor = LoginBusiness;

  LoginBusiness.prototype.resetBusiness = function() {

    this.gm = GlobalBusiness;

    FacebookConnect.login().then(function(data) {
      setTokenLocalStorage(data);
    });

  };

  function setTokenLocalStorage(obj) {
    localStorage.setItem('token_fb', JSON.stringify(obj));
  }

  if (!window.APP.business.Login)
    window.APP.business.Login = {};

  window.APP.business.Login.LoginBusiness = LoginBusiness;

})(this, document, this.$$);
