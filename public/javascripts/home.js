$(document).ready(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  $(".navbar-nav li a").hover(function(event){
    $('.navbar-collapse').show('show');
  })




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
