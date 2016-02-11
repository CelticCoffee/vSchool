$(document).ready(function() {

  if((screen.width < 415) && ('portrait')) {
    $('#desktopCarousel').remove();
    $('#mobileSwapImage').show();
    $('#desktopCal').remove();
    $('#mobileCal').show();
    // $('#mobileMenuStar').show();
  }
  else if ((screen.width >=415) && ('portrait')) {

    $('#mobileSwapImage').remove();
    $('#desktopCarousel').show();

    $('#desktopCal').show();
    $('#mobileCal').remove();
  }
  $('#mobileMenuStar').click(function() {
    $('.mobileNav').toggle('slow');
  })




})
