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

    , Router
    , Timeout

    , ReceitaRepository;

  _BaseBusiness = window.APP.business._BaseBusiness;
  GlobalBusiness = window.APP.business.GlobalBusiness;

  Router = window.APP.interface.Router;
  Timeout = window.APP.interface.Timeout;

  ReceitaRepository = window.APP.repository.ReceitaRepository;

  function IngredienteResultadoBusiness() {
    _BaseBusiness.call(this);

    this.loaded = false;
  }

  IngredienteResultadoBusiness.prototype = new _BaseBusiness();
  IngredienteResultadoBusiness.prototype.constructor = IngredienteResultadoBusiness;

  IngredienteResultadoBusiness.prototype.resetBusiness = function() {

    this.recipes = [];

    this.inProgress = false;
    this.notFound = false;

    this.searchRecipeByIngredient();

  };

  IngredienteResultadoBusiness.prototype.searchRecipeByIngredient = function() {

    ReceitaRepository.search(processQuery()).then(onSuccessReceitaRepository.bind(this));

    function onSuccessReceitaRepository(data) {

      if (data.hits.total > 0)
        setRecipes.bind(this)(data);
      else
        notFoundRecipes.bind(this)();

    }

    function setRecipes(data) {
      this.loaded = true;

      this.recipes = processResponse(data);

      Timeout(function() {
        this.inProgress = false;
      }.bind(this));
    }

    function notFoundRecipes() {
      this.inProgress = false;
      this.notFound = true;

      this.recipes = [];
    }

    function processResponse(data) {

      var result;

      result = data.hits.hits.map(function(el, index) {
        var recipe;

        recipe = el._source;
        recipe.displayIngredients = [];

        GlobalBusiness.current.ingredients.forEach(function(elem) {
          if (recipe.displayIngredients.length < 4) {
            recipe.recipes.forEach(function(recipeEl) {
              recipeEl.ingredients.forEach(function(ingredientEl) {

                if (ingredientEl.name.indexOf(elem.name) > -1)
                  recipe.displayIngredients.push(ingredientEl);

              })
            })
          }
        });

        if (index == 0)
          recipe.displayIngredients = recipe.displayIngredients.slice(0, 3);
        else if (index > 0 && index < 3)
          recipe.displayIngredients = recipe.displayIngredients.slice(0, 2);
        else
          recipe.displayIngredients = [];

        return recipe;
      });

      return result;

    }

    function processQuery() {

      var query
        , ingredientsQuery;

      ingredientsQuery = [];

      GlobalBusiness.current.ingredients.forEach(function(el) {
        var obj;

        obj = {
          filtered: {
            query: {
              match: {
                'recipes.ingredients.name': el.name
              }
            },
            filter: {
              bool: {
                must: [
                  {term: {"recipes.ingredients.unit": el.unit }},
                  {range: {"recipes.ingredients.quantity": {lte: el.quantity }}}
                ]
              }
            }
          }
        }

        ingredientsQuery.push(obj);
      });

      query = {
        size: 15,
        query: {
          nested: {
            path: 'recipes.ingredients',
            query: {
              bool: {
                should: ingredientsQuery
              }
            }
          }
        }
      };

      return query;

    }

  }

  IngredienteResultadoBusiness.prototype.goDetailRecipe = function(recipe) {

    GlobalBusiness.current.recipe = recipe;
    Router.go('views/receita/detalhe.html');

  };

  window.APP.business.Ingrediente.IngredienteResultadoBusiness = IngredienteResultadoBusiness;

})(this, document, this.$$);
