// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$.fn.form.settings.rules.date = function(value) {
  return value.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/) ? true : false;
}

$.fn.form.settings.rules.smartInteger = function(value) {
  return (!value || value.match(/^\d+$/)) ? true : false;
}

$.fn.form.settings.rules.smartLength = function(value, required) {
  return (!value || value.length == required || value.length == 0) ? true : false;
}

function clearAddress() {
  $('#address_city').val('');
  $('#address_district').val('');
  $('#address_street').val('');
  $('.state').dropdown('restore defaults');
}

function fillAddress(param) {
  switch(param.resultado){
    case '1':
      $('#address_city').val(param.cidade);
      $('#address_district').val(param.bairro);
      $('#address_street').val(param.tipo_logradouro + ' ' + param.logradouro);
      $('.state').dropdown('set selected', param.uf);
      break;
    case '2':
      $('#address_city').val(param.cidade);
      $('#address_district').val('');
      $('#address_street').val('');
      $('.state').dropdown('set selected', param.uf);
      break;
    default:
      clearAddress();
  }
}