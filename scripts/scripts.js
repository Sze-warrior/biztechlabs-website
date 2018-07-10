const btnLearnMore = document.querySelector(".button--learn-more");
const section = document.querySelector(".test");

btnLearnMore.addEventListener("click", (event) =>{
	Velocity(section, "scroll", {duration: 700, easing: "ease-in-out"});
});