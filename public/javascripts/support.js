$(document).ready(function() {

  $('#auctionButton').click(function(){
    $('.auctionMore').toggle('slow');
  });

  $('#run4Small').click(function(){
    $('#run4CathedralHero').removeClass('noShowText').siblings().addClass('noShowText');
  });

  $('#auctionSmall').click(function(){
    $('.cathedralAuctionHero').removeClass('noShowText').siblings().addClass('noShowText');
  });

  $('#leaveLegacySm').click(function(){
    $('.leaveALegacyHero').removeClass('noShowText').siblings().addClass('noShowText');
  })

  $('#run4Sponsors').click(function() {
    $('.run4More').toggle('slow');
  });


  if(screen.width < 415) {
    $('#iconMenu').remove();
    $('#supportTabs').show();
    console.log('bacon');
  }
  else if (screen.width >=415) {
    console.log('baconToast');
    $('#supportTabs').remove();
  };

  $('#legacyTab').click(function() {
    $('.leaveALegacyHero').show('slow').siblings().addClass('noShowText');
  });

  $('#aucTab').click(function() {
    $('.cathedralAuctionHero').show('slow').siblings().addClass('noShowText');
  });

  $('#run4Tab').click(function() {
    $('#run4CathedralHero').show('slow').siblings().addClass('noShowText');
    console.log('snail');
  });

});
