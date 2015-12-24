(function(window, document, $$) {
  'use strict';

  var ingredienteBSN
    , vm;

  ingredienteBSN = new window.APP.business.Ingrediente.IngredienteBusiness();

  $$(document).on('pageInit', '.page[data-page="ingrediente"]', initController);

  $$(document).on('pageBeforeRemove', '.page[data-page="ingrediente"]', removeController);

  function initController() {

    var element

      , modelVue;

    element = '.page[data-page="ingrediente"]';

    modelVue = {
      el: element,
      data: {
        ingredients: []
      },
      methods: {
        resetBusiness: ingredienteBSN.resetBusiness,
        initModalIngrediente: ingredienteBSN.initModalIngrediente,
        deleteIngredient: ingredienteBSN.deleteIngredient
      }
    };

    vm = new Vue(modelVue);
    vm.resetBusiness();

  }

  function removeController() {

    vm.$destroy(true);

  }
})(this, document, this.$$);
