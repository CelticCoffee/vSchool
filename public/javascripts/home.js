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
    $('#mobileMenu').hide();
  }

  //
  // $('#mobileMenuStar').click(function() {
  //   $('.mobileNav').toggle('slow');


  $('#mobileMenuStar' ).click(function() {
      $('.mobileNav').toggle('slow');
  });
  $('#closeNav').click(function(){
    $('.mobileNav').toggle('slow');
  })

  $("#mobileMenuStar").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

});
