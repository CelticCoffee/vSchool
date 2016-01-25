$(document).ready(function() {
  console.log('banana');
  if(screen.width < 415) {
    $('#bellKid').remove();
    $('.mobileSwap').show();
    console.log('pie');
  }
  else if (screen.width >=415) {
    console.log('banana pie');
    $('.mobileSwap').remove();
  }
});
