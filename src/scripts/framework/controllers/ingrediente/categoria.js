(function(window, document, $$) {
  'use strict';

  var categoriaBSN
    , vm;

  categoriaBSN = new window.APP.business.Ingrediente.CategoriaBusiness();

  // Evento de init da página, pegando especificamente para a página de receita
  $$(document).on('pageInit', '.page[data-page="ingrediente-categoria"]', initController);

  // Evento de destroy da página, pegando especificamente para a página de receita
  $$(document).on('pageBeforeRemove', '.page[data-page="ingrediente-categoria"]', removeController);

  function initController() {

    var element

      , modelVue;

    element = '.page[data-page="ingrediente-categoria"]';

    modelVue = {
      el: element,
      data: {
        categories: []
      },
      methods: {
        resetBusiness: categoriaBSN.resetBusiness,
        goToIngredients: categoriaBSN.goToIngredients
      }
    };

    vm = new Vue(modelVue);
    vm.resetBusiness();

  }

  function removeController() {

    vm.$destroy(true);

  }
})(this, document, this.$$);
