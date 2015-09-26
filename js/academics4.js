

//Creating Objects to be used in the constructor function//
// var welcomeObj = {
// 	link: welcomeLink,
// 	content: welcome
// };

// var preKObj = {
// 	link:  preKLink,
// 	content: preK,
// };

//Make a constructor, put it in an IFFY//
$(document).ready(function() {
	console.log('jQuery is working')
	
	var AcademicFlip = (function() {
		console.log('firstTest');
		function AcademicFlip(link, content) {
			this.link = link
			this.content = content;
		}

			AcademicFlip.prototype.selectText = function() {
				$(this.link).click(function() {
				$(this.link).addClass('active').siblings().removeClass('active');
				$(this.content).addClass('showText').siblings().removeClass('showText');
				return selectText;
				});
			}
		return AcademicFlip;

	})();
			
function welcomeObj (welcomeLink, welcome) {
	console.log('snowman');
}

welcomeObj.prototype = Object.create(AcademicFlip.prototype);
welcomeObj.prototype.constructor = welcomeObj;

function preKObj (preKLink, preK) {
	console.log('frosty');
}

preKObj.prototype = Object.create(AcademicFlip.prototype);
preKObj.prototype.constructor = preKObj;

});

// //eventually I'd like to put this into a constructor//
// $(document).ready(function() {
// 	$('#welcomeLink').click(function() {
// 		$('#welcomeLink').addClass('active').siblings().removeClass('active');
// 		$('#welcome').addClass('showText').siblings().removeClass('showText');
// 	});

// 	$('#facultyLink').click(function() {
// 		$('#facultyLink').addClass('active').siblings().removeClass('active');
// 		$('#faculty').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});

// 	$('#preKLink').click(function() {
// 		$('#preKLink').addClass('active').siblings().removeClass('active');
// 		$('#preK').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});

// 	$('#kindergartenLink').click(function() {
// 		$('#kindergartenLink').addClass('active').siblings().removeClass('active');
// 		$('#kindergarten').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});

// 	$('#firstGradeLink').click(function() {
// 		$('#firstGradeLink').addClass('active').siblings().removeClass('active');
// 		$('#firstGrade').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});

// 	$('#secondGradeLink').click(function() {
// 		$('#secondGradeLink').addClass('active').siblings().removeClass('active');
// 		$('#secondGrade').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
// 	$('#thirdGradeLink').click(function() {
// 		$('#thirdGradeLink').addClass('active').siblings().removeClass('active');
// 		$('#thirdGrade').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
// 	$('#fourthGradeLink').click(function() {
// 		$('#fourthGradeLink').addClass('active').siblings().removeClass('active');
// 		$('#fourthGrade').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
// 	$('#fifthGradeLink').click(function() {
// 		$('#fifthGradeLink').addClass('active').siblings().removeClass('active');
// 		$('#fifthGrade').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
// 	$('#middleSchoolLink').click(function() {
// 		$('#middleSchoolLink').addClass('active').siblings().removeClass('active');
// 		$('#middleSchool').addClass('showText').siblings().removeClass('showText');
// 		$('#welcome').addClass('noShowText');
// 	});
// });

