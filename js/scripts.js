"use strict";

//Variables
var btnLearnMore = document.querySelector(".button--learn-more");
var section = document.querySelector(".test");
var featuresScroller = document.querySelector(".features-wrapper");
var learn = document.querySelector(".learn");

//Function to autoscroll on hero banner
btnLearnMore.addEventListener("click", function (event) {
	Velocity(section, "scroll", { duration: 700, easing: "ease-in-out" });
});

//Function for mobile scroller
featuresScroller.addEventListener("scroll", function (event) {

	var leftPosition = featuresScroller.scrollLeft;
	var circle = document.querySelectorAll(".circle");
	var scrollLeftSecondCard = 150;
	var scrollLeftThirdCard = 380;

	if (leftPosition >= scrollLeftThirdCard) {
		for (var i = 0; i < circle.length; i++) {
			circle[i].classList.remove("circle--active");
			circle[2].classList.add("circle--active");
		}
	} else if (leftPosition > scrollLeftSecondCard) {
		for (var i = 0; i < circle.length; i++) {
			circle[i].classList.remove("circle--active");
			circle[1].classList.add("circle--active");
		}
	} else {
		for (var i = 0; i < circle.length; i++) {
			circle[i].classList.remove("circle--active");
			circle[0].classList.add("circle--active");
		}
	}
});