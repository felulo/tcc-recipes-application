(function(window, document, $$) {
  'use strict';

  var Picker;

  Picker = {
    openPicker: openPicker,
    closePicker: closePicker
  }

  function openPicker(element) {
    window.f7App.pickerModal(element);
  }
  
  function closePicker(element) {
    window.f7App.closeModal(element);
  }

  window.APP.interface.Picker = Picker;

})(this, document, this.$$);
