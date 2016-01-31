$(document).ready(function() {

  $('#auctionButton').click(function(){
    $('.auctionMore').toggle();
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
    $('.run4More').toggle();
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
    $('#legacy').show().siblings().addClass('noShowText');
    console.log('baconEggs');
  });

  $('#aucTab').click(function() {
    $('#cathAucHero').show().siblings().addClass('noShowText');
    console.log('tomato');
  });

  $('#run4Tab').click(function() {
    $('#run4CathedralHero').show().siblings().addClass('noShowText');
    console.log('snail');
  });

});
