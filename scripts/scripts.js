//Variables
const btnLearnMore = document.querySelector(".button--learn-more");
const section = document.querySelector(".test");
const featuresScroller = document.querySelector(".features-wrapper");
const industry = document.querySelector(".industry");

//Function to autoscroll on hero banner
btnLearnMore.addEventListener("click", (event) =>{
	Velocity(section, "scroll", {duration: 700, easing: "ease-in-out"});
});

//Function for mobile scroller
featuresScroller.addEventListener("scroll", (event) =>{

	const leftPosition = featuresScroller.scrollLeft;
	const circle = document.querySelectorAll(".circle");
	const scrollLeftSecondCard = 210;
	const scrollLeftThirdCard = 430;

	if(leftPosition > 150){
		
		for(var i = 0; i < circle.length; i++){
			circle[i].classList.remove("circle--active");
			circle[1].classList.add("circle--active");
		}

	}else{
		
		for(var i = 0; i < circle.length; i++){
			circle[i].classList.remove("circle--active");
			circle[0].classList.add("circle--active");
		}	

	}


	if(leftPosition > 380){
		for(var i = 0; i < circle.length; i++){
			circle[i].classList.remove("circle--active");
			circle[2].classList.add("circle--active");
		}
		featuresScroller.scrollLeft = scrollLeftThirdCard;

	}else if(leftPosition < 150){
		for(var i = 0; i < circle.length; i++){
			circle[i].classList.remove("circle--active");
			circle[1].classList.add("circle--active");
		}
	}

});