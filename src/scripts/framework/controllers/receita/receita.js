(function(window, document, $$) {
  'use strict';

  var receitaBSN
    , vm;

  receitaBSN = new window.APP.business.Receita.ReceitaBusiness();

  // Evento de init da página, pegando especificamente para a página de receita
  $$(document).on('pageInit', '.page[data-page="receita"]', initController);

  $$(document).on('pageBeforeRemove', '.page[data-page="receita"]', removeController);

  function initController(e) {

    var element

      , modelVue;

    element = '.page[data-page="receita"]';

    modelVue = {
      el: element,
      data: {
        listRecipes: [],
        textRecipe: '',
        inProgress: false,
        loaded: false,
        notFound: false
      },
      methods: {
        resetBusiness: receitaBSN.resetBusiness,
        searchRecipe: receitaBSN.searchRecipe,
        goDetailRecipe: receitaBSN.goDetailRecipe
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
