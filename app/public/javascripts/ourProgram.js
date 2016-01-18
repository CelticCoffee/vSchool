$(document).ready(function() {
  $('#ensembleButton').click(function(){
    $('.musicMain').hide();
    $('#musicEnsembles').toggle();
    $('#musicInfoBack').toggle();
  });
  $('#musicInfoBack').click(function(){
    $('#musicEnsembles').toggle();
    $('.musicMain').show();
    $('#musicInfoBack').hide();
  });


});
