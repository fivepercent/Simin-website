$("#hamburger-menu").on("click", function(){
	//document.getElementById("hamburger-menu-handle").classList.toggle("active");
	$("#hamburger-menu-handle").toggleClass("active");
	$("#pull-down-menu").toggleClass("is-open");
});

$(function() {
	$(window).scroll(function() {
		var move = $(window).scrollTop();
		if(move>100){
			$(".title").css({bottom: '0%'});
			$(".item-0").css({top: '5%'});
			$(".item-1").css({bottom: '65%'});
			$(".item-2").css({bottom: '50%'});
			$(".item-3").css({bottom: '40%'});
			$(".item-4").css({bottom: '20%'});
			$(".item-5").css({bottom: '65%'});
			$(".item-6").css({bottom: '42%'});
			$(".item-7").css({bottom: '20%'});
			$(".nav-header").addClass("nav-header-shrink");

		}else{
			$(".title").css({bottom: '40%'});
			$(".item-0").css({top: '22%'});
			$(".item-1").css({bottom: '75%'});
			$(".item-2").css({bottom: '60%'});
			$(".item-3").css({bottom: '50%'});
			$(".item-4").css({bottom: '30%'});
			$(".item-5").css({bottom: '75%'});
			$(".item-6").css({bottom: '52%'});
			$(".item-7").css({bottom: '30%'});
			$(".nav-header").removeClass("nav-header-shrink");
		}
		console.log(move);
		// var percentage = 30-(move/600)*20;
		// $(".item-1").animate({bottom: percentage+"%"});
		// $(".item-2").css({"transform": "translate(0px,"+move+"px)"});
		// $(".item-3").css({"transform": "translate(0px,"+move+"px)"});
		// $(".item-4").css({"transform": "translate(0px,"+move+"px)"});
		// $(".item-5").css({"transform": "translate(0px,"+move+"px)"});
		// $(".item-6").css({"transform": "translate(0px,"+move+"px)"});
		// $(".item-7").css({"transform": "translate(0px,"+move+"px)"});
	 });
});
