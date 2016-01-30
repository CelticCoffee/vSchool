$(document).ready(function() {
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});

	// SWITCHING BETWEEN CONTAINERS//
	$('#programOverview').click(function(){
		$('.welcomeContainer').show().siblings('.ourProgramBox').hide();
	})
	$('#music').click(function(){
		$('.musicContainer').show().siblings('.ourProgramBox').hide();
	})

	$('#peLink').click(function(){
		$('.peContainer').show().siblings('.ourProgramBox').hide();
	})

	$('#spanish').click(function(){
		$('.spanishContainer').show().siblings('.ourProgramBox').hide();
	})

	//Music//
	$('#musicButton').click(function() {
		$('#musicText').toggle('slow');
	});

	 $('#ensembleButton').click(function(event) {
		$('#musicEnsembles').toggle('slow');
		console.log('fish');
	});

	$('#moreMusic').click(function(){
		$('#musicMain').toggle();
		$('#musicMore').toggle();
	})

	$('#backToMusic').click(function(){
		$('#musicMain').toggle();
		$('#musicMore').toggle();
	})

	$('#musicSchedule').click(function(){
		$('#musicMain').toggle();
		$('#musCal').toggle();
	})

	$('#calToMusic').click(function(){
		$('#musicMain').toggle();
		$('#musCal').toggle();
	})

//Spanish//

	$('#spanishSchedule').click(function(){
		$('#spanishMain').toggle();
		$('#spanishMore').toggle();
	})

	$('#backToSpanish').click(function(){
		$('#spanishMain').toggle();
		$('#spanishMore').toggle();
	})

	//PE//
		$('#peSchedule').click(function(){
			$('#peMain').toggle();
			$('#peCal').toggle();
		})

		$('#backToPe').click(function(){
			$('#peMain').toggle();
			$('#peCal').toggle();
		})

	 $('#peButton').click(function(event) {
		$('#peText').toggle('slow');
		console.log('snowman');
	});

	 $('#uniformButton').click(function(event) {
		$('#peUniform').toggle('slow');
		console.log('boots');
	});

//Art//
	 $('#artButton').click(function(event) {
		$('#artText').toggle('slow');
		console.log('snowman');
	});

	 $('#artShowButton').click(function(event) {
		$('#artShowText').toggle('slow');
		console.log('boots');
	});

	//Activities//
	$('#activitiesButton').click(function(event) {
		$('#cyoText').toggle('slow');

	})


	//Tech//

	$('#techButton').click(function(event) {
		$('#techText').toggle('slow');
		console.log('snow');
	});



});
