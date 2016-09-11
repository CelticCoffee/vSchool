
// //eventually I'd like to put this into a constructor//
$(document).ready(function() {

	console.log('hello');

		//Navigation on Academics Page//
		$('#welcomeTab').click(function(){
				$('.welcomeContainer').toggle('slow');
				$('.welcomeTab').addClass('active').siblings().removeClass('active');
			});

			$('#facultyTab').click(function(){
				$('#facultyTab').addClass('active').siblings().removeClass('active');
				$('#welcomeTab').removeClass('active');
				$('.facultyContainer').show('slow').siblings('.academicText').hide();
			})

			//teacher objects//
			var CreateBios = (function() {


			function Teacher (teacherName, role, subtitle, src, email, bio) {
				this.teacherName = teacherName;
				this.role = role;
				this.subtitle = subtitle;
				// this.image = image;
				this.src = src;
				this.makeDiv = '<img src="' + src + '" alt="'+ teacherName + '">';
				this.email = email;
				this.makeEmail = '<a href="mailto:' + email + '">' + email + '</a>'
			}

			var proto = Teacher.prototype

			var mcCoy = new Teacher('Mrs. Stephanie McCoy', 'First Grade Teacher and Assistant Principal', 'Religion and Language Arts', 'images/academics/img_faculty/mcCoy.jpg', '1stgrade@cathedral-or.org', 'Mrs. McCoy has been teaching First Grade at Cathedral School since 2004. Before relocating to Portland, she taught 2nd grade at St. Catherine School in Seattle, Washington. Mrs. McCoy received her Bachelors of Arts in Elementary Education from Washington State University and her Masters of Education, from Seattle University. Outside of Cathedral, Mrs. McCoy loves spending time outdoors and with her family and friends.');

			var kilkenny = new Teacher('Mrs. Gabi Kilkenny', 'First Grade Teacher', 'Math, Science and Social Studies', 'images/academics/img_faculty/kilkenny.jpg', '1stgrade@cathedral-or.org', 'Mrs. Kilkenny joined the 1st Grade team in the fall of 2015. Prior to her move to 1st grade, she spent two years teaching 5th grade and one year teaching Middle School writing, both at Cathedral. Mrs. Kilkenny received her Bachelors of Arts at Western Oregon University and her Masters in Teaching from Lewis &#38; Clark College. Mrs. Kilkenny loves her husband, son, and the Oregon Ducks.');


			var teacherArray = [mcCoy, kilkenny];

			proto.makeATeacher = function() {
			var fragment = document.createDocumentFragment();
			for (var i = 0; i < teacherArray.length-1 ; i++) {
				var teacherDiv = document.createElement('div');
				teacherDiv.className = 'thumbnail';
				teacherDiv.src = teacherArray[i].src;
				oneTeacher = teacherArray[i].makeDiv;
				fragment.appendChild(teacherDiv);
				teacherDiv.innerHTML = oneTeacher;
			}
			var firstGrade = document.getElementById('firstG');
			firstGrade.appendChild(fragment);

		};


	})();

//
// 			$('#preKTab').click(function(){
// 				$('#preKTab').addClass('active').siblings().removeClass('active');
// 				$('#welcomTab').removeClass('active');
// 				$('.preKContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#kinderTab').click(function(){
// 				$('#kinderTab').addClass('active').siblings().removeClass('active');
// 				$('#welcomeTab').removeClass('active');
// 				$('.kinderContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#firstGradeTab').click(function(){
// 				$('#firstGradeTab').addClass('active').siblings().removeClass('active');
// 				$('.firstGradeContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#secondGradeTab').click(function(){
// 				$('#secondGradeTab').addClass('active').siblings().removeClass('active');
// 				$('.secondGradeContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#thirdGradeTab').click(function(){
// 				$('#thirdGradeTab').addClass('active').siblings().removeClass('active');
// 				$('.thirdGradeContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#fourthGradeTab').click(function(){
// 				$('#fourthGradeTab').addClass('active').siblings().removeClass('active');
// 				$('.fourthGradeContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#fifthGradeTab').click(function(){
// 				$('#fifthGradeTab').addClass('active').siblings().removeClass('active');
// 				$('.fifthGradeContainer').show('slow').siblings('.academicText').hide();
// 			})
//
// 			$('#middleSchoolTab').click(function(){
// 				$('#middleSchoolTab').addClass('active').siblings().removeClass('active');
// 				$('.middleSchoolContainer').show('slow').siblings('.academicText').hide();
// 			})
//
//
//
// 	//PreK Picture Button Bio Reveal//
// 	$('#mannenbachButton').click(function(){
// 		$('#mannenbachBio').toggle('slow');
// 	})
//
// 	$('#murphyButton').click(function(){
// 		$('#murphyBio').toggle('slow');
// 	})
//
// 	//PreKService Text Reveal//
// 	$('#morePreK').click(function(){
// 		$('#preKMain').toggle('slow');
// 		$('#preKMore').toggle('slow');
// 	})
//
// 	$('#backToPreK').click(function(){
// 		$('#preKMain').toggle('slow');
// 		$('#preKMore').toggle('slow');
// 	})
//
// 	//Kinder Picture Button Bio Reveal//
// 	$('#gobelButton').click(function(){
// 		$('#gobelBio').toggle('slow');
// 	})
//
// 	$('#strongButton').click(function(){
// 		$('#strongBio').toggle('slow');
// 	})
//
// 	//kindergarten Text Reveal//
// 	$('#moreKinder').click(function(){
// 		$('#kinderMain').toggle('slow');
// 		$('#kinderMore').toggle('slow');
// 	})
//
// 	$('#backToKinder').click(function(){
// 		$('#kinderMain').toggle('slow');
// 		$('#kinderMore').toggle('slow');
// 	})
//
// 	$('#kinderDocButton').click(function(){
// 		$('#kinderMain').toggle('slow');
// 		$('#kinderMore').toggle('slow');
// 	})
//
//
// //1st Grade Button Text Reveal
// 	$('#moreFirstGrade').click(function(){
// 		$('#firstGradeMain').toggle('slow');
// 		$('#firstGradeMore').toggle('slow');
// 	})
//
// 	$('#backToFirst').click(function(){
// 		$('#firstGradeMain').toggle('slow');
// 		$('#firstGradeMore').toggle('slow');
// 	})
//
// 	$('#firstGradeDocButton').click(function(){
// 		$('#firstGradeMain').toggle('slow');
// 		$('#firstGradeMore').toggle('slow');
// 	})
//
// 	//First Grade Picture Button Bio Reveal//
// 	$('#mcCoyButton').click(function(){
// 		$('#mcCoyBack').show('slow');
// 		$('#mcCoyPicHide').toggle('slow');
// 		$('#mcCoyBio').toggle('slow');
// 		$(this).hide();
// 	})
//
// 	$('#mcCoyBack').click(function(){
// 		$('#mcCoyButton').toggle('slow');
// 		$('#mcCoyPicHide').toggle('slow');
// 		$('#mcCoyBio').toggle('slow');
// 		$(this).hide();
// 	})
//
//
// 	$('#kilkennyButton').click(function(){
// 		$('#kilkennyBio').toggle('slow');
// 	})
//
// 	$('#petersenButton').click(function(){
// 		$('#petersenBio').toggle('slow');
// 	})
//
// 	//2nd Grade Button Text Reveal
// 		$('#moreSecondGrade').click(function(){
// 			$('#secondGradeMain').toggle('slow');
// 			$('#secondGradeMore').toggle('slow');
// 		})
//
// 		$('#backToSecond').click(function(){
// 			$('#secondGradeMain').toggle('slow');
// 			$('#secondGradeMore').toggle('slow');
// 		})
//
// 		$('#secondGradeDocButton').click(function(){
// 			$('#secondGradeMain').toggle('slow');
// 			$('#secondGradeMore').toggle('slow');
// 		})
//
// 		//Second Grade Picture Button Bio Reveal//
// 		$('#mcMahonButton').click(function(){
// 			$('#mcMahonBio').toggle('slow');
// 		})
//
// 		$('#odiorneButton').click(function(){
// 			$('#odiorneBio').toggle('slow');
// 		})
//
// 		//3rd Grade Button Text Reveal
// 			$('#moreThirdGrade').click(function(){
// 				$('#thirdGradeMain').toggle('slow');
// 				$('#thirdGradeMore').toggle('slow');
// 			})
//
// 			$('#backToThird').click(function(){
// 				$('#thirdGradeMain').toggle('slow');
// 				$('#thirdGradeMore').toggle('slow');
// 			})
//
// 			$('#thirdGradeDocButton').click(function(){
// 				$('#thirdGradeMain').toggle('slow');
// 				$('#thirdGradeMore').toggle('slow');
// 			})
//
//
// 			//Third Grade Picture Button Bio Reveal//
// 			$('#trachtenbargButton').click(function(){
// 				$('#trachtenbargBio').toggle('slow');
// 			})
//
// 			$('#fryButton').click(function(){
// 				$('#fryBio').toggle('slow');
// 			})
//
// 			//4th Grade Button Text Reveal
// 				$('#moreFourthGrade').click(function(){
// 					$('#fourthGradeMain').toggle('slow');
// 					$('#fourthGradeMore').toggle('slow');
// 				})
//
// 				$('#backToFourth').click(function(){
// 					$('#fourthGradeMain').toggle('slow');
// 					$('#fourthGradeMore').toggle('slow');
// 				})
//
// 				$('#fourthGradeButton').click(function(){
// 					$('#fourthGradeMain').toggle('slow');
// 					$('#fourthGradeMore').toggle('slow');
// 				})
//
// 				$('#fourthGradeDocButton').click(function(){
// 					$('#fourthGradeMain').toggle('slow');
// 					$('#fourthGradeMore').toggle('slow');
// 				})
//
// 				//Fourth Grade Picture Button Bio Reveal//
// 				$('#penkalaButton').click(function(){
// 					$('#penkalaBio').toggle('slow');
// 				})
//
// 				$('#niedermeyerButton').click(function(){
// 					$('#niedermeyerBio').toggle('slow');
// 				})
//
// 				//5th Grade Button Text Reveal
// 					$('#moreFifthGrade').click(function(){
// 						$('#fifthGradeMain').toggle('slow');
// 						$('#fifthGradeMore').toggle('slow');
// 					})
//
// 					$('#backToFifth').click(function(){
// 						$('#fifthGradeMain').toggle('slow');
// 						$('#fifthGradeMore').toggle('slow');
// 					})
//
// 					$('#fifthGradeButton').click(function(){
// 						$('#fifthGradeMain').toggle('slow');
// 						$('#fifthGradeMore').toggle('slow');
// 					})
//
// 					$('#fifthGradeDocButton').click(function(){
// 						$('#fifthGradeMain').toggle('slow');
// 						$('#fifthGradeMore').toggle('slow');
// 					})
//
// 					//Fifth Grade Picture Button Bio Reveal//
// 					$('#hartButton').click(function(){
// 						$('#hartBio').toggle('slow');
// 					})
//
// 					$('#niedermeyerButton2').click(function(){
// 						$('#niedermeyerBio2').toggle('slow');
// 					})
//
// 					//Middle School Button Text Reveal
// 						$('#moreMiddleSchool').click(function(){
// 							$('#middleSchoolMain').toggle('slow');
// 							$('#middleSchoolMore').toggle('slow');
// 						})
//
// 						$('#backToMiddleSchool').click(function(){
// 							$('#middleSchoolMain').toggle('slow');
// 							$('#middleSchoolMore').toggle('slow');
// 						})
//
// 						$('#middleSchoolButton').click(function(){
// 							$('#middleSchoolMain').toggle('slow');
// 							$('#middleSchoolMore').toggle('slow');
// 						})
//
// 						$('#middleSchoolDocButton').click(function(){
// 							$('#middleSchoolMain').toggle('slow');
// 							$('#middleSchoolMore').toggle('slow');
// 						})
//
// 						//Middle School Picture Button Bio Reveal//
// 						$('#aguonButton').click(function(){
// 							$('#aguonBio').toggle('slow');
// 						})
//
// 						$('#exleyButton').click(function(){
// 							$('#exleyBio').toggle('slow');
// 						})
//
// 						$('#raeButton').click(function(){
// 							$('#raeBio').toggle('slow');
// 						})
//
// 						$('#wellnitzButton').click(function(){
// 							$('#wellnitzBio').toggle('slow');
// 						})
//


});