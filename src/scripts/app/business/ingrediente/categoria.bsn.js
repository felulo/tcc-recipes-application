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

    , Router;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  Router = window.APP.interface.Router;

  function CategoriaBusiness() {
    _BaseBusiness.call(this);
  }

  CategoriaBusiness.prototype = new _BaseBusiness();
  CategoriaBusiness.prototype.constructor = CategoriaBusiness;

  CategoriaBusiness.prototype.resetBusiness = function() {

    this.categories = [{
      name: 'Carnes',
      img: 'assets/images/carne.png'
    },{
      name: 'Bolos e Tortas',
      img: 'assets/images/bolo.png'
    },{
      name: 'Aves',
      img: 'assets/images/ave.png'
    },{
      name: 'Peixes e frutos do mar',
      img: 'assets/images/peixe.png'
    },{
      name: 'Saladas, molhos e acompanhamentos',
      img: 'assets/images/salada.png'
    },{
      name: 'Sopas',
      img: 'assets/images/sopa.png'
    },{
      name: 'Massas',
      img: 'assets/images/massa.png'
    },{
      name: 'Doces e Sobremesas',
      img: 'assets/images/sobremesa.png'
    }];

  };

  CategoriaBusiness.prototype.goToIngredients = function(category) {

    GlobalBusiness.current.category = category;
    Router.go('views/ingrediente/ingrediente.html');

  }

  if (!window.APP.business.Ingrediente)
    window.APP.business.Ingrediente = {};

  window.APP.business.Ingrediente.CategoriaBusiness = CategoriaBusiness;

})(this, document, this.$$);
