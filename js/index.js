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
			$(".title").css({bottom: '25%'});
			$(".item-0").css({top: '5%'});
			$(".item-1").css({bottom: '65%'});
			$(".item-2").css({bottom: '50%'});
			$(".item-3").css({bottom: '40%'});
			$(".item-4").css({bottom: '25%'});
			$(".item-5").css({bottom: '65%'});
			$(".item-6").css({bottom: '42%'});
			$(".item-7").css({bottom: '25%'});
			$(".nav-header").addClass("nav-header-shrink").animate();

		}else{
			$(".title").css({bottom: '50%'});
			$(".item-0").css({top: '12%'});
			$(".item-1").css({bottom: '75%'});
			$(".item-2").css({bottom: '60%'});
			$(".item-3").css({bottom: '50%'});
			$(".item-4").css({bottom: '35%'});
			$(".item-5").css({bottom: '75%'});
			$(".item-6").css({bottom: '52%'});
			$(".item-7").css({bottom: '35%'});
			$(".nav-header").removeClass("nav-header-shrink");
		}
	 });
});
