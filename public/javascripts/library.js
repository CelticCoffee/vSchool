$(document).ready(function() {

//mobile image swap
	if(screen.width < 415) {
    $('.wrapper').remove();
    $('#librarySwap').show();
    console.log('pie');
  }
  else if (screen.width >=415) {
    console.log('banana pie');
    $('#librarySwap').remove();
    $('.wrapper').show();
  }




//BIRTHDYAY BOOKS//
	$('#birthdayButton').click(function(event) {
		$('#birthdayBookForm').toggle();
		console.log('welcome to the library');
	});

//Multnomah County Library Buttons//
$('#zero').click(function(event) {
	$('#MCLIntro').toggle('slow').siblings().hide();

});

$('#first').click(function(event) {
	$('#lunchBunch').toggle('slow').siblings().hide();

	});
$('#second').click(function(event) {
		$('#LibraryCards').toggle('slow').siblings().hide();;
	});
$('#third').click(function(event) {
		$('#BannedBooks').toggle('slow').siblings().hide();;;
	});
$('#fourth').click(function(event) {
		$('#SummerReading').toggle('slow').siblings().hide();;;
	});


//Library Catalog//
$('#libDocs').click(function(event){
	console.log('libraryDocs');
	$('#moreDocs').toggle('slow')
	$('#libCat').toggle();
});

$('#MCLBack').click(function(event){
	$('#moreDocs').toggle('slow');
	$('#libCat').toggle('slow');
});


//AWARD BOOKS //
$('#moreBattle').click(function(event){
	$('#bookBattleB').toggle('slow');
	$('#bookBattleA').toggle('slow');

	});

$('#battleBack').click(function(event) {
	// $('#bookBattle2').addClass('noShowLibText');
	$('#bookBattleA').toggle('slow');
	$('#bookBattleB').toggle('slow');
	});

$('#awardBookButton').click(function(){
	$('#awardBooks2').addClass('showLibText');
	$('#awardBooks1').toggle('slow');
	});

$('#awardBookBack').click(function() {
	$('#awardBooks2').removeClass('showLibText');
	$('#awardBooks1').toggle('slow');
	});

});

// $('#preKLink').click(function() {
// 		$('#preKLink').addClass('active').siblings().removeClass('active');
// 		$('#preK').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
