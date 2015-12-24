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

  function _BaseBusiness() {
    this.gm = {};
  }

  _BaseBusiness.prototype.resetBusiness = function() {
    this.gm = {};
  };

  window.APP.business._BaseBusiness = _BaseBusiness;

})(this, document, this.$$);
