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
			$(".title").css({bottom: '5%'});
			$(".item-0").css({top: '3%'});
			$(".item-1").css({bottom: '65%'});
			$(".item-2").css({bottom: '50%'});
			$(".item-3").css({bottom: '25%'});
			$(".item-4").css({bottom: '5%'});
			$(".item-5").css({bottom: '65%'});
			$(".item-6").css({bottom: '32%'});
			$(".item-7").css({bottom: '10%'});
			$(".nav-header").addClass("nav-header-shrink").animate();
			$("#logo").attr('src', 'image/home/logo1.png');
		}else{
			$(".title").css({bottom: '15%'});
			$(".item-0").css({top: '8%'});
			$(".item-1").css({bottom: '75%'});
			$(".item-2").css({bottom: '60%'});
			$(".item-3").css({bottom: '35%'});
			$(".item-4").css({bottom: '15%'});
			$(".item-5").css({bottom: '75%'});
			$(".item-6").css({bottom: '42%'});
			$(".item-7").css({bottom: '20%'});
			$(".nav-header").removeClass("nav-header-shrink");
			$("#logo").attr('src', 'image/home/logo.png');
		}
	 });
});
