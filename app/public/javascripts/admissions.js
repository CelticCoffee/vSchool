$(document).ready(function() {
	console.log('hello Cathedral');

	$("#admissionsButton").click(function() {
		$('.jumbo1').hide();
		$('#moreJumbo').show();
	});

	$("#backButton").click(function() {
		$('.jumbo1').show();
		$('#moreJumbo').hide();
	});



});
