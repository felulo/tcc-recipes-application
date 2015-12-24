/**
 * Created by felul on 18/10/2015.
 */
'use strict';

var CordovaInit = function() {

  var onDeviceReady = function() {
    receivedEvent('deviceready');
  };

  var receivedEvent = function(event) {
    console.log('Start event received, bootstrapping application setup.');

    // Inicializar a aplicação
    window.f7App = new Framework7({
      material: true
    });
    window.f7MainView = window.f7App.addView('.main-view');
    window.f7MainView.router.load({
      url: 'views/home/home.html',
      animatePages: false
    });

    window.APP.business.GlobalBusiness.resetBusiness();

  };

  this.bindEvents = function() {
    document.addEventListener('deviceready', onDeviceReady, false);
  };

  //If cordova is present, wait for it to initialize, otherwise just try to
  //bootstrap the application.
  if (window.cordova !== undefined) {
    console.log('Cordova found, wating for device.');
    this.bindEvents();
  } else {
    console.log('Cordova not found, booting application');
    receivedEvent('manual')
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.log('Bootstrapping!');
  new CordovaInit();
});
