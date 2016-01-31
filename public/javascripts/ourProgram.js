$(document).ready(function() {

	// SWITCHING BETWEEN CONTAINERS//
	$('#programOverview').click(function(){
		$('.welcomeContainer').show('slow').siblings('.ourProgramBox').hide();
	})
	$('#music').click(function(){
		$('.musicContainer').show('slow').siblings('.ourProgramBox').hide();
	})

	$('#peLink').click(function(){
		$('.peContainer').show('slow').siblings('.ourProgramBox').hide();
	})

	$('#spanish').click(function(){
		$('.spanishContainer').show('slow').siblings('.ourProgramBox').hide();
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
		$('#musicMain').toggle('slow');
		$('#musicMore').toggle('slow');
	})

	$('#backToMusic').click(function(){
		$('#musicMain').toggle('slow');
		$('#musicMore').toggle('slow');
	})

	$('#musicSchedule').click(function(){
		$('#musicMain').toggle('slow');
		$('#musCal').toggle('slow');
	})

	$('#calToMusic').click(function(){
		$('#musicMain').toggle('slow');
		$('#musCal').toggle('slow');
	})

//Spanish//

	$('#spanishSchedule').click(function(){
		$('#spanishMain').toggle('slow');
		$('#spanishMore').toggle('slow');
	})

	$('#backToSpanish').click(function(){
		$('#spanishMain').toggle('slow');
		$('#spanishMore').toggle('slow');
	})

	//PE//
		$('#peSchedule').click(function(){
			$('#peMain').toggle('slow');
			$('#peCal').toggle('slow');
		})

		$('#backToPe').click(function(){
			$('#peMain').toggle('slow');
			$('#peCal').toggle('slow');
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
