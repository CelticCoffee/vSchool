"use strict";


$(document).ready(function() {

  function Home(){
    this.content = document.getElementsByClassName("content");
    this.mainNav = document.querySelector(".mainNav");
    this.starButton = document.querySelector(".star-button");
    this.desktopPicDiv = document.querySelector(".fadePics");

    //The content sections//
    this.main = document.getElementById("cathedralMain");


    this.buttonMenu = document.querySelector(".buttonMenu");
    this.bioContainer = document.querySelectorAll(".bio-container");
    this.moreContent = document.querySelector(".more-content");
    this.advisoryMore = document.querySelector(".advisory-more");
    this.parentMore = document.querySelector(".parent-more");
    this.buttonDOM = document.querySelectorAll(".auctionBox");
    this.titleDOM = document.querySelectorAll(".boxTitle");
    this.textArray = document.querySelectorAll(".auctionText");
  }

  Home.prototype.init = function(){
    this.bindEvents();
    this.navStyle();
    this.heroSwap();
    this.carousel();
    this.bioButton();

  };


  //Checks the screen width and shows either mobile or desktop navigation//
  Home.prototype.navStyle = function(){
    if (window.innerWidth > 415){
      this.starButton.classList.add("hideStarButton");
      this.mainNav.classList.add("desktopNav");
    }
    if(window.innerWidth <= 415){
      this.starButton.classList.remove("hideStarButton");
      this.mainNav.classList.remove("desktopNav");

    }
  };

  //Checks screenwidth and shows a mobile hero shot instead of the fadiing images if screen is small//
  Home.prototype.heroSwap = function(){
    var mobileHero = document.querySelector(".mobileHero");
    var hiddenHero = document.querySelector(".desktopHero");
    // var desktopPicDiv = document.querySelector(".fadePics");
      if(window.innerWidth >= 415 && mobileHero){
        mobileHero.classList.add("hiddenHero");
        hiddenHero.classList.remove("hiddenHero");
        this.desktopPicDiv.classList.remove("hidden");
      }
      else if (window.innerWidth <=415 && mobileHero){
        this.desktopPicDiv.classList.add("hidden");
        mobileHero.classList.remove("hiddenHero");
        hiddenHero.classList.add("hiddenHero");
      }
    };

  //the carousel of images at the top of the page//
  Home.prototype.carousel = function(){
    var activeHero = document.querySelector(".firstPic");

    var secondImage =document.createElement("img");
    secondImage.classList.add("desktopHero");
    secondImage.alt = "second photo";
    secondImage.src ="images/carousel/cathedralHomeLarge1.jpg";

    var thirdImage = document.createElement("img");
    thirdImage.classList.add("desktopHero");
    thirdImage.alt = "third photo";
    thirdImage.src = "images/carousel/cathedralHome2Large.jpg";


    //Two helper functions that make the images fade//
    var swapPics = function(){
      $(activeHero).fadeOut(3000, function(){
        $(this).replaceWith(secondImage);
        $(activeHero).fadeIn();
        window.setTimeout(secondSwap, 3000);
      });
    };

    var secondSwap = function(){
        $(secondImage).fadeOut(6000, function(){
          $(this).replaceWith(thirdImage);
          $(secondImage).fadeIn();
        });
    };
    //called if window innerwidth is small mobile screens
    if(window.innerWidth < 415){
      return;
    }
    if(window.innerWidth >= 415){
      window.setTimeout(swapPics, 3000);
    }
  };

  function listenersForArrayItems(array, clickEventFunction){
    for(var i = 0; i < array.length; i++){
      array[i].addEventListener("click", clickEventFunction, false);
    }
  }


  Home.prototype.bindEvents = function(){
    this.starButton.addEventListener("click", this.openNav.bind(this), false);
    listenersForArrayItems(this.content, this.navClose.bind(this));
    // this.content.addEventListener("click", this.navClose.bind(this), false);
    if(this.buttonMenu){
      this.buttonMenu.addEventListener("click", this.subSectionReveal.bind(this), false);
    }
    if(this.moreContent){
      this.moreContent.addEventListener("click", this.showMore.bind(this), false);
    }
    if(this.parentMore){
      this.parentMore.addEventListener("click", this.showMoreParent.bind(this), false);
    }
    if(this.advisoryMore){
      this.advisoryMore.addEventListener("click", this.showMoreAdvisory.bind(this), false);
    }
    var that = this;
    window.addEventListener("resize", function() {
      that.heroSwap();
      that.navStyle();
      });
  };

  //mobile star nav menu-- opens when clicked.
  Home.prototype.openNav = function(event){
    if(this.mainNav.classList.contains("mainNavShow")){
      this.mainNav.classList.remove("mainNavShow");
    }
    else {
      this.mainNav.classList.add("mainNavShow");
    }
  };

  Home.prototype.navClose = function(event){
    if(this.mainNav.classList.contains("mainNavShow")){
      this.mainNav.classList.remove("mainNavShow");
    }
    else {
      return;
    }
  };


  Home.prototype.subSectionReveal = function(event){
    var activeLink = event.target;
    var academicPages = [];
    var welcome = document.getElementById("welcome");
    var faculty = document.getElementById("faculty");
    var prekindergarten = document.getElementById("prekindergarten");
    var kindergarten = document.getElementById("kindergarten");
    var firstGrade = document.getElementById("firstGrade");
    var secondGrade = document.getElementById("secondGrade");
    var thirdGrade = document.getElementById("thirdGrade");
    var fourthGrade = document.getElementById("fourthGrade");
    var fifthGrade = document.getElementById("fifthGrade");
    var middleSchool = document.getElementById("middleSchool");

    academicPages.push(welcome, faculty, prekindergarten, kindergarten, firstGrade, secondGrade, thirdGrade, fourthGrade, fifthGrade, middleSchool);
    academicPages.forEach(function(el){
      if(activeLink.classList.contains(el.id)){
        el.style.display = "flex";
        el.classList.add("myContainer");
      }
      else {
        el.style.display = "none";
      }
    });
  };


  Home.prototype.bioButton = function(event){
    var that = this;
    this.bioContainer.forEach(function(el){
      el.addEventListener("click", that.showBios.bind(that), false);
    })
  }

  Home.prototype.showBios = function(event){
    var bioActive = event.target;
    var parent = event.target.parentNode;
    var children = parent.childNodes;

    children.forEach(function(el){
      if((bioActive.classList.contains("in-use"))&&(el.nodeName == "P")){
        el.classList.add("hidden");
        bioActive.classList.remove("in-use");
      }
      else if(el.nodeName == "P"){
        el.classList.remove("hidden");
        bioActive.classList.add("in-use");
      }
    });
  };


  Home.prototype.showMore = function(event){
    var moreStory = document.querySelector(".more-story");
    expandText(moreStory);
  };

  Home.prototype.showMoreParent = function(event){
    var moreStory = document.querySelector(".parentOpen");
    expandText(moreStory);
  };

  Home.prototype.showMoreAdvisory = function(event){
    var moreStory = document.querySelector(".advisoryOpen");
    expandText(moreStory)
  };

  function expandText(div){
    div.classList.toggle("hidden");
  }
  
  var indexPage = new Home();
  indexPage.init();

});
