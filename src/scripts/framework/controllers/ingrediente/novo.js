(function(window, document, $$) {
  'use strict';

  var ingredienteNovoBSN
    , vm;

  ingredienteNovoBSN = new window.APP.business.Ingrediente.IngredienteNovoBusiness();

  $$(document).on('open', '.picker-new-ingredient', initController);

  $$(document).on('closed', '.picker-new-ingredient', removeController);

  function initController() {

    var element

      , modelVue;

    element = '.picker-new-ingredient';

    modelVue = {
      el: element,
      data: {
        ingredient: '',
        unit: '',
        quantity: 0,
        units: []
      },
      methods: {
        resetBusiness: ingredienteNovoBSN.resetBusiness,
        addIngredient: ingredienteNovoBSN.addIngredient,
        closePicker: ingredienteNovoBSN.closePicker,
      }
    };

    vm = new Vue(modelVue);
    vm.resetBusiness();

  }

  function removeController() {

    vm.$destroy(true);

  }
})(this, document, this.$$);
