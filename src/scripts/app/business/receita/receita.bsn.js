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

    , Timeout
    , Router

    , ReceitaRepository;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  Timeout = window.APP.interface.Timeout;
  Router = window.APP.interface.Router;

  ReceitaRepository = window.APP.repository.ReceitaRepository;

  function ReceitaBusiness() {
    _BaseBusiness.call(this);

    this.textRecipe = '';
    this.loaded = false;
  }

  ReceitaBusiness.prototype = new _BaseBusiness();
  ReceitaBusiness.prototype.constructor = ReceitaBusiness;

  ReceitaBusiness.prototype.resetBusiness = function() {

    this.listRecipes = [];

    this.inProgress = false;
    this.notFound = false;

    this.searchRecipe();

  };

  ReceitaBusiness.prototype.searchRecipe = function() {
    if (this.textRecipe != '') {
      this.inProgress = true;
      this.notFound = false;

      ReceitaRepository.search({
        size: 15,
        query: {
          match: {
            name: this.textRecipe
          }
        }
      }).then(onSuccessReceitaRepository.bind(this));
    } else
      this.listRecipes = [];

    function onSuccessReceitaRepository(data) {
      if (data.hits.total > 0)
        setRecipes.bind(this)(data);
      else
        notFoundRecipes.bind(this)();
    }

    function setRecipes(data) {
      this.loaded = true;

      this.listRecipes = data.hits.hits.map(function(el) {
        return el._source;
      });

      Timeout(function() {
        this.inProgress = false;
      }.bind(this));
    }

    function notFoundRecipes() {
      this.inProgress = false;
      this.notFound = true;

      this.listRecipes = [];
    }
  };

  ReceitaBusiness.prototype.goDetailRecipe = function(recipe) {

    GlobalBusiness.current.recipe = recipe;
    Router.go('views/receita/detalhe.html');

  };

  if (!window.APP.business.Receita)
    window.APP.business.Receita = {};

  window.APP.business.Receita.ReceitaBusiness = ReceitaBusiness;

})(this, document, this.$$);
