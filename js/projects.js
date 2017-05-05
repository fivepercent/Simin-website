$("#hamburger-menu").on("click", function(){
	//document.getElementById("hamburger-menu-handle").classList.toggle("active");
	$("#hamburger-menu-handle").toggleClass("active");
	$("#pull-down-menu").toggleClass("is-open");
	$("#overlay").toggleClass("is-open");
});

$(function() {
	$(window).scroll(function() {
		var move = $(window).scrollTop();
		if(move>100){
			$(".nav-header").addClass("nav-header-shrink").animate();

		}else{
			$(".nav-header").removeClass("nav-header-shrink");
		}
	 });
});