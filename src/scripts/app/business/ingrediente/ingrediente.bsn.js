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

    , Http
    , Timeout
    , Picker;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  Http = window.APP.interface.Http;
  Picker = window.APP.interface.Picker;

  function IngredienteBusiness() {
    _BaseBusiness.call(this);
  }

  IngredienteBusiness.prototype = new _BaseBusiness();
  IngredienteBusiness.prototype.constructor = IngredienteBusiness;

  IngredienteBusiness.prototype.resetBusiness = function() {

    this.ingredients = GlobalBusiness.current.ingredients;

  };

  IngredienteBusiness.prototype.initModalIngrediente = function() {
    if (!this.modalText)
      Http.get({
        url: 'views/ingrediente/ingrediente-novo.html'
      }).then(onSuccessGetModalText.bind(this));
    else
      Picker.openPicker(this.modalText);

    function onSuccessGetModalText(data) {
      this.modalText = data.trim();

      Picker.openPicker(this.modalText);
    }
  }

  IngredienteBusiness.prototype.deleteIngredient = function(index, event) {
    this.ingredients.splice(index, 1);
  }

  if (!window.APP.business.Ingrediente)
    window.APP.business.Ingrediente = {};

  window.APP.business.Ingrediente.IngredienteBusiness = IngredienteBusiness;

})(this, document, this.$$);
