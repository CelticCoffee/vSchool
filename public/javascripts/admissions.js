$(document).ready(function() {
	console.log('hello Cathedral');
	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

	$("#admissionsButton").click(function() {
		$('.jumbo1').hide();
		$('#moreJumbo').show();
	});

	$("#backButton").click(function() {
		$('.jumbo1').show();
		$('#moreJumbo').hide();
	});



});
