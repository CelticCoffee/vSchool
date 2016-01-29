
// //eventually I'd like to put this into a constructor//
$(document).ready(function() {
	console.log('hello');


		//Navigation on Academics Page//

	$('#welcomeTab').click(function(){
		$('.welcomeContainer').toggle();
		$('.welcomeTab').addClass('active').siblings().removeClass('active');
	});

	$('#facultyTab').click(function(){
		$('#facultyTab').addClass('active').siblings().removeClass('active');
		$('#welcomeTab').removeClass('active');
		$('.facultyContainer').show().siblings('.academicText').hide();
	})

	$('#preKTab').click(function(){
		$('#preKTab').addClass('active').siblings().removeClass('active');
		$('#welcomTab').removeClass('active');
		$('.preKContainer').show().siblings('.academicText').hide();
	})

	$('#kinderTab').click(function(){
		$('#kinderTab').addClass('active').siblings().removeClass('active');
		$('.kinderContainer').show().siblings('.academicText').hide();
	})

	$('#firstGradeTab').click(function(){
		$('#firstGradeTab').addClass('active').siblings().removeClass('active');
		$('.firstGradeContainer').show().siblings('.academicText').hide();
	})

	$('#secondGradeTab').click(function(){
		$('#secondGradeTab').addClass('active').siblings().removeClass('active');
		$('.secondGradeContainer').show().siblings('.academicText').hide();
	})

	$('#thirdGradeTab').click(function(){
		$('#thirdGradeTab').addClass('active').siblings().removeClass('active');
		$('.thirdGradeContainer').show().siblings('.academicText').hide();
	})

	$('#fourthGradeTab').click(function(){
		$('#fourthGradeTab').addClass('active').siblings().removeClass('active');
		$('.fourthGradeContainer').show().siblings('.academicText').hide();
	})

	$('#fifthGradeTab').click(function(){
		$('#fifthGradeTab').addClass('active').siblings().removeClass('active');
		$('.fifthGradeContainer').show().siblings('.academicText').hide();
	})

	$('#middleSchoolTab').click(function(){
		$('#middleSchoolTab').addClass('active').siblings().removeClass('active');
		$('.middleSchoolContainer').show().siblings('.academicText').hide();
	})


	//PreK Picture Button Bio Reveal//
	$('#mannenbachButton').click(function(){
		$('#mannenbachBio').toggle();
	})

	$('#murphyButton').click(function(){
		$('#murphyBio').toggle();
	})

	//PreKService Text Reveal//
	$('#morePreK').click(function(){
		$('#preKMain').toggle();
		$('#preKMore').toggle();
	})

	$('#backToPreK').click(function(){
		$('#preKMain').toggle();
		$('#preKMore').toggle();
	})

	//Kinder Picture Button Bio Reveal//
	$('#gobelButton').click(function(){
		$('#gobelBio').toggle();
	})

	$('#strongButton').click(function(){
		$('#strongBio').toggle();
	})

	//kindergarten Text Reveal//
	$('#moreKinder').click(function(){
		$('#kinderMain').toggle();
		$('#kinderMore').toggle();
	})

	$('#backToKinder').click(function(){
		$('#kinderMain').toggle();
		$('#kinderMore').toggle();
	})

	$('#kinderDocButton').click(function(){
		$('#kinderMain').toggle();
		$('#kinderMore').toggle();
	})


//1st Grade Button Text Reveal
	$('#moreFirstGrade').click(function(){
		$('#firstGradeMain').toggle();
		$('#firstGradeMore').toggle();
	})

	$('#backToFirst').click(function(){
		$('#firstGradeMain').toggle();
		$('#firstGradeMore').toggle();
	})

	$('#firstGradeDocButton').click(function(){
		$('#firstGradeMain').toggle();
		$('#firstGradeMore').toggle();
	})

	//First Grade Picture Button Bio Reveal//
	$('#mcCoyButton').click(function(){
		$('#mcCoyBio').toggle();
	})

	$('#kilkennyButton').click(function(){
		$('#kilkennyBio').toggle();
	})

	$('#petersenButton').click(function(){
		$('#petersenBio').toggle();
	})

	//2nd Grade Button Text Reveal
		$('#moreSecondGrade').click(function(){
			$('#secondGradeMain').toggle();
			$('#secondGradeMore').toggle();
		})

		$('#backToSecond').click(function(){
			$('#secondGradeMain').toggle();
			$('#secondGradeMore').toggle();
		})

		$('#secondGradeDocButton').click(function(){
			$('#secondGradeMain').toggle();
			$('#secondGradeMore').toggle();
		})

		//Second Grade Picture Button Bio Reveal//
		$('#mcMahonButton').click(function(){
			$('#mcMahonBio').toggle();
		})

		$('#odiorneButton').click(function(){
			$('#odiorneBio').toggle();
		})

		//3rd Grade Button Text Reveal
			$('#moreThirdGrade').click(function(){
				$('#thirdGradeMain').toggle();
				$('#thirdGradeMore').toggle();
			})

			$('#backToThird').click(function(){
				$('#thirdGradeMain').toggle();
				$('#thirdGradeMore').toggle();
			})

			$('#thirdGradeDocButton').click(function(){
				$('#thirdGradeMain').toggle();
				$('#thirdGradeMore').toggle();
			})


			//Third Grade Picture Button Bio Reveal//
			$('#trachtenbargButton').click(function(){
				$('#trachtenbargBio').toggle();
			})

			$('#fryButton').click(function(){
				$('#fryBio').toggle();
			})

			//4th Grade Button Text Reveal
				$('#moreFourthGrade').click(function(){
					$('#fourthGradeMain').toggle();
					$('#fourthGradeMore').toggle();
				})

				$('#backToFourth').click(function(){
					$('#fourthGradeMain').toggle();
					$('#fourthGradeMore').toggle();
				})

				$('#fourthGradeButton').click(function(){
					$('#fourthGradeMain').toggle();
					$('#fourthGradeMore').toggle();
				})

				$('#fourthGradeDocButton').click(function(){
					$('#fourthGradeMain').toggle();
					$('#fourthGradeMore').toggle();
				})

				//Fourth Grade Picture Button Bio Reveal//
				$('#penkalaButton').click(function(){
					$('#penkalaBio').toggle();
				})

				$('#niedermeyerButton').click(function(){
					$('#niedermeyerBio').toggle();
				})

				//5th Grade Button Text Reveal
					$('#moreFifthGrade').click(function(){
						$('#fifthGradeMain').toggle();
						$('#fifthGradeMore').toggle();
					})

					$('#backToFifth').click(function(){
						$('#fifthGradeMain').toggle();
						$('#fifthGradeMore').toggle();
					})

					$('#fifthGradeButton').click(function(){
						$('#fifthGradeMain').toggle();
						$('#fifthGradeMore').toggle();
					})

					$('#fifthGradeDocButton').click(function(){
						$('#fifthGradeMain').toggle();
						$('#fifthGradeMore').toggle();
					})

					//Fifth Grade Picture Button Bio Reveal//
					$('#hartButton').click(function(){
						$('#hartBio').toggle();
					})

					$('#niedermeyerButton2').click(function(){
						$('#niedermeyerBio2').toggle();
					})

					//Middle School Button Text Reveal
						$('#moreMiddleSchool').click(function(){
							$('#middleSchoolMain').toggle();
							$('#middleSchoolMore').toggle();
						})

						$('#backToMiddleSchool').click(function(){
							$('#middleSchoolMain').toggle();
							$('#middleSchoolMore').toggle();
						})

						$('#middleSchoolButton').click(function(){
							$('#middleSchoolMain').toggle();
							$('#middleSchoolMore').toggle();
						})

						$('#middleSchoolDocButton').click(function(){
							$('#middleSchoolMain').toggle();
							$('#middleSchoolMore').toggle();
						})

						//Middle School Picture Button Bio Reveal//
						$('#aguonButton').click(function(){
							$('#aguonBio').toggle();
						})

						$('#exleyButton').click(function(){
							$('#exleyBio').toggle();
						})

						$('#raeButton').click(function(){
							$('#raeBio').toggle();
						})

						$('#wellnitzButton').click(function(){
							$('#wellnitzBio').toggle();
						})



});
