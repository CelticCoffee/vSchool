//eventually I'd like to put this into a constructor//
$(document).ready(function() {
	$('#facultyLink').click(function() {
		$('#facultyLink').addClass('active').siblings().removeClass('active');
		$('#faculty').addClass('showText').siblings().removeClass('showText');
	});

	$('#preKLink').click(function() {
		$('#preKLink').addClass('active').siblings().removeClass('active');
		$('#preK').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});

	$('#kindergartenLink').click(function() {
		$('#kindergartenLink').addClass('active').siblings().removeClass('active');
		$('#kindergarten').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});

	$('#firstGradeLink').click(function() {
		$('#firstGradeLink').addClass('active').siblings().removeClass('active');
		$('#firstGrade').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});

	$('#secondGradeLink').click(function() {
		$('#secondGradeLink').addClass('active').siblings().removeClass('active');
		$('#secondGrade').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});
	$('#thirdGradeLink').click(function() {
		$('#thirdGradeLink').addClass('active').siblings().removeClass('active');
		$('#thirdGrade').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});
	$('#fourthGradeLink').click(function() {
		$('#fourthGradeLink').addClass('active').siblings().removeClass('active');
		$('#fourthGrade').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});
	$('#fifthGradeLink').click(function() {
		$('#fifthGradeLink').addClass('active').siblings().removeClass('active');
		$('#fifthGrade').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});
	$('#middleSchoolLink').click(function() {
		$('#middleSchoolLink').addClass('active').siblings().removeClass('active');
		$('#middleSchool').addClass('showText').siblings().removeClass('showText');
		$('#faculty').addClass('noShowText');
	});
});

