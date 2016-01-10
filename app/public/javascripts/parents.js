
$(document).ready(function() {

/*Alert Buttons for Uniform Vendors*/
  $('#landsEndCode').click(function(){
    alert('Use Cathedral Code 9000-3786-2 for login`');
  });
  $('#dennisCode').click(function(){
    alert('Use Cathedral Code 25208');
  })

  $('#advisoryClick').click(function(){
    $('#advisoryBox').removeClass('noShowText').siblings().addClass('noShowText');
  });

  $('#parAssocClick').click(function(){
    $('#parAssocBox').removeClass('noShowText').siblings().addClass('noShowText');
  });



/*Committees and Events Content--changing central box*/
/*This is something I want to eventually rework in Backbone*/
$('#parentClick').click(function(){
  $('#parentBox').removeClass('noShowText').siblings().addClass('noShowText');
});

$('#advisoryClick').click(function(){
  $('#advisoryBox').removeClass('noShowText').siblings().addClass('noShowText');
});

$('#parAssocClick').click(function(){
  $('#parAssocBox').removeClass('noShowText').siblings().addClass('noShowText');
});

$('#run4CathClick').click(function(){
  $('#run4Box').removeClass('noShowText').siblings().addClass('noShowText');
});
$('#auctionClick').click(function(){
  $('#auctionBox').removeClass('noShowText').siblings().addClass('noShowText');
});

/*These are the additional text button sections on the central box*/
$('#pReq').click(function() {
	$('.parentRequirements').toggle();
  $('.parentIcon').toggle();
});

$('#auctionButton').click(function() {
	$('.auctionMore').toggle();
});

$('#councilButton').click(function(){
  $('#councilMembers').toggle();
});

$('#parentAssocMore').click(function(){
  $('.pAssocMore').toggle();
})

$('#assocDocuments').click(function(){
  $('.pAssocDoc').toggle();
})




});
