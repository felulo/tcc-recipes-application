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

    , Picker;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  Picker = window.APP.interface.Picker;

  function IngredienteNovoBusiness() {
    _BaseBusiness.call(this);
  }

  IngredienteNovoBusiness.prototype = new _BaseBusiness();
  IngredienteNovoBusiness.prototype.constructor = IngredienteNovoBusiness;

  IngredienteNovoBusiness.prototype.resetBusiness = function() {

    this.ingredient = '';
    this.unit = '';
    this.quantity = 0;

    this.units = [{
      name: 'Unidade',
      value: 'unidade'
    },{
      name: 'Colher de sopa',
      value: 'colher'
    },{
      name: 'Colher de chá',
      value: 'colher_chá'
    },{
      name: 'Xícara',
      value: 'xícara'
    },{
      name: 'Pitada',
      value: 'pitada'
    },{
      name: 'Copo',
      value: 'copo'
    },{
      name: 'Kilograma',
      value: 'kilograma'
    },{
      name: 'Litro',
      value: 'litro'
    }];

  };

  IngredienteNovoBusiness.prototype.addIngredient = function() {

    GlobalBusiness.current.ingredients.push({
      name: this.ingredient,
      quantity: this.quantity,
      unit: this.unit
    });
    this.closePicker();

  }

  IngredienteNovoBusiness.prototype.closePicker = function() {
    Picker.closePicker('.picker-new-ingredient');
  }

  if (!window.APP.business.Ingrediente)
    window.APP.business.Ingrediente = {};

  window.APP.business.Ingrediente.IngredienteNovoBusiness = IngredienteNovoBusiness;
})(this, document, this.$$);
