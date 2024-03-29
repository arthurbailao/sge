// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.ui.datepicker
//= require semantic-ui/modules/dimmer.js 
//= require semantic-ui/modules/checkbox.js 
//= require semantic-ui/modules/tab.js 
//= require semantic-ui/modules/behavior/state.js 
//= require semantic-ui/modules/behavior/colorize.js 
//= require semantic-ui/modules/behavior/form.js 
//= require semantic-ui/modules/behavior/api.js 
//= require semantic-ui/modules/nag.js 
//= require semantic-ui/modules/transition.js 
//= require semantic-ui/modules/popup.js 
//= require semantic-ui/modules/shape.js 
//= require semantic-ui/modules/rating.js 
//= require semantic-ui/modules/video.js 
//= require semantic-ui/modules/modal.js 
//= require semantic-ui/modules/accordion.js 
//= require semantic-ui/modules/sidebar.js 
//= require semantic-ui/modules/search.js 
//= require semantic-ui/modules/dropdown.js 
//= require semantic-ui/modules/chatroom.js 
//= require_tree .

/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
jQuery(function($){
  $.datepicker.regional['pt-BR'] = {
    closeText: 'Fechar',
    prevText: '&#x3c;Anterior',
    nextText: 'Pr&oacute;ximo&#x3e;',
    currentText: 'Hoje',
    monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
    'Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    dayNamesMin: ['D','S','T','Q','Q','S','S'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''};
  $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});