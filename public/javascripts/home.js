$(document).ready(function() {

  console.log('banana');
  if(screen.width < 415) {
    $('#desktopCarousel').remove();
    $('#mobileSwapImage').show();
    console.log('pie');
  }
  else if (screen.width >=415) {
    console.log('banana pie');
    $('#mobileSwap').remove();
    $('#desktopCarousel').show();
  }


});
