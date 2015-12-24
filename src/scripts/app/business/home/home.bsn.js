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

  function HomeBusiness() {
    _BaseBusiness.call(this);
  }

  HomeBusiness.prototype = new _BaseBusiness();
  HomeBusiness.prototype.constructor = HomeBusiness;

  HomeBusiness.prototype.resetBusiness = function() {

    this.gm = GlobalBusiness;
    this.gm.toolbarTitle = 'Home';

  };

  if (!window.APP.business.Home)
    window.APP.business.Home = {};

  window.APP.business.Home.HomeBusiness = HomeBusiness;

})(this, document, this.$$);
