(function(window, document, $$) {
  'use strict';

  if (!window.APP)
    window.APP = {
      business: {},
      interface: {},
      repository: {},
      services: {}
    };

  var Picker;

  Picker = {
    openPicker: openPicker,
    closePicker: closePicker
  }

  function openPicker(element) { }
  function closePicker(element) { }

  window.APP.interface.Picker = Picker;

})(this, document, this.$$);
