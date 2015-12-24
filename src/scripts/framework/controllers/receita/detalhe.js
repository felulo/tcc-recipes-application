(function(window, document, $$) {
  'use strict';

  var receitaDetalheBSN
    , vm;

  receitaDetalheBSN = new window.APP.business.Receita.ReceitaDetalhesBusiness();

  // Evento de init da página, pegando especificamente para a página de receita
  $$(document).on('pageInit', '.page[data-page="receita-detalhe"]', initController);

  $$(document).on('pageBeforeRemove', '.page[data-page="receita-detalhe"]', removeController);

  function initController(e) {

    var element

      , modelVue;

    element = '.page[data-page="receita-detalhe"]';

    modelVue = {
      el: element,
      data: {
        recipe: {}
      },
      methods: {
        resetBusiness: receitaDetalheBSN.resetBusiness
      }
    };

    vm = new Vue(modelVue);
    vm.resetBusiness();

    vm.$nextTick(function() {
      createSwipers();
      handleTabClick();
    });

    vm.destroyComponents = destroyComponents;

    function createSwipers() {
      vm.swiperGallery = new Swiper('.swiper-gallery', {
        pagination: '.swiper-pagination',
        effect: 'coverflow'
      });

      vm.swiperInfo = new Swiper('.swiper-info', {
        onSlideChangeStart: onSlideChangeStart
      });

      function onSlideChangeStart(e) {
        $$('.tab-link.active').removeClass('active');
        $$('.tab-link').eq(e.activeIndex).addClass('active');
      }
    }

    function handleTabClick() {
      $$('.tab-link').on('click', function() {
        vm.swiperInfo.slideTo($$(this).index());
        vm.swiperInfo.update();
      });
    }

    function destroyComponents() {

      vm.swiperInfo.destroy(true, true);
      vm.swiperGallery.destroy(true, true);

    }

  }

  function removeController() {

    vm.destroyComponents();
    vm.$destroy(true);

  }
})(this, document, this.$$);
