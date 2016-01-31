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
	$('#MCLIntro').toggle().siblings().hide();

});

$('#first').click(function(event) {
	$('#lunchBunch').toggle().siblings().hide();

	});
$('#second').click(function(event) {
		$('#LibraryCards').toggle().siblings().hide();;
	});
$('#third').click(function(event) {
		$('#BannedBooks').toggle().siblings().hide();;;
	});
$('#fourth').click(function(event) {
		$('#SummerReading').toggle().siblings().hide();;;
	});


//Library Catalog//
$('#libDocs').click(function(event){
	console.log('libraryDocs');
	$('#moreDocs').toggle()
	$('#libCat').toggle();
});

$('#MCLBack').click(function(event){
	$('#moreDocs').toggle();
	$('#libCat').toggle();
});


//AWARD BOOKS //
$('#moreBattle').click(function(event){
	$('#bookBattleB').toggle();
	$('#bookBattleA').toggle();

	});

$('#battleBack').click(function(event) {
	// $('#bookBattle2').addClass('noShowLibText');
	$('#bookBattleA').toggle();
	$('#bookBattleB').toggle();
	});

$('#awardBookButton').click(function(){
	$('#awardBooks2').addClass('showLibText');
	$('#awardBooks1').toggle();
	});

$('#awardBookBack').click(function() {
	$('#awardBooks2').removeClass('showLibText');
	$('#awardBooks1').toggle();
	});

});

// $('#preKLink').click(function() {
// 		$('#preKLink').addClass('active').siblings().removeClass('active');
// 		$('#preK').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
