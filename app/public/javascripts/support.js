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
});
