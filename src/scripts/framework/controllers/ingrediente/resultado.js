(function(window, document, $$) {
  'use strict';

  var ingredienteResultadoBSN
    , vm;

  ingredienteResultadoBSN = new window.APP.business.Ingrediente.IngredienteResultadoBusiness();

  // Evento de init da página, pegando especificamente para a página de receita
  $$(document).on('pageInit', '.page[data-page="ingrediente-resultado"]', initController);

  // Evento de destroy da página, pegando especificamente para a página de receita
  $$(document).on('pageBeforeRemove', '.page[data-page="ingrediente-resultado"]', removeController);

  function initController() {

    var element

      , modelVue;

    element = '.page[data-page="ingrediente-resultado"]';

    modelVue = {
      el: element,
      data: {
        recipes: [],
        inProgress: false,
        loaded: false,
        notFound: false
      },
      methods: {
        resetBusiness: ingredienteResultadoBSN.resetBusiness,
        searchRecipeByIngredient: ingredienteResultadoBSN.searchRecipeByIngredient,
        goDetailRecipe: ingredienteResultadoBSN.goDetailRecipe
      }
    };

    vm = new Vue(modelVue);
    vm.resetBusiness();

    vm.$watch('inProgress', function(newVal) {
      if (newVal)
        window.f7App.showIndicator();
      else
        window.f7App.hideIndicator();
    })

  }

  function removeController() {

    vm.$destroy(true);

  }
})(this, document, this.$$);
