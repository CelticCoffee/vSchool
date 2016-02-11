$(document).ready(function() {

  $('#auctionButton').click(function(){
    $('.auctionMore').toggle('slow');
  });
  //
  $('#run4Small').click(function(){
    $('#run4CathedralHero').show().siblings().addClass('noShowText');
  });

  $('#auctionSmall').click(function(){
    $('.cathedralAuctionHero').show().siblings().addClass('noShowText');
  });

  $('#leaveLegacySm').click(function(){
    $('.leaveALegacyHero').show().siblings().addClass('noShowText');
  })

  $('#run4Sponsors').click(function() {
    $('.run4More').show('slow');
  });


  if(screen.width < 415) {
    $('#iconMenu').remove();
    $('#supportTabs').show();
    console.log('bacon');
    $('#legacyTab').click(function() {
      $('.leaveALegacyHero').show('slow').siblings().addClass('noShowText');
    });

    $('#aucTab').click(function() {
      $('.cathedralAuctionHero').show('slow').siblings().addClass('noShowText');
    });

    $('#run4Tab').click(function() {
      $('#run4CathedralHero').show('slow').siblings().addClass('noShowText');
    });
  }
  else if (screen.width >=415) {
    console.log('baconToast');
    $('#supportTabs').remove();
  };



});
