$(document).ready(function() {

  console.log('banana');
  if((screen.width < 415) && ('portrait')) {
    $('#desktopCarousel').remove();
    $('#mobileSwapImage').show();

    $('#desktopCal').remove();
    $('#mobileCal').show();
  }
  else if ((screen.width >=415) && ('portrait')) {
    console.log('banana pie');
    $('#mobileSwap').remove();
    $('#desktopCarousel').show();

    $('#desktopCal').show();
    $('#mobileCal').remove();

  }

  

});
