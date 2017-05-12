$("#hamburger-menu").on("click", function(){
	//document.getElementById("hamburger-menu-handle").classList.toggle("active");
	$("#hamburger-menu-handle").toggleClass("active");
	$("#pull-down-menu").toggleClass("is-open");
	$("#overlay").toggleClass("is-open");
});
$("#back-to-top img").on("click", function(){
	$('html, body').animate({ scrollTop: 0 }, 600);
})

$(function() {
	$(window).scroll(function() {
		var move = $(window).scrollTop();
		if(move>100){
			$(".web-title").css({bottom: '20%'});
			$(".web-item").css({top: '10%'});
			$(".nav-header").addClass("nav-header-shrink").animate();
			$("#logo").attr('src', 'image/home/logo1.png');
			$(".back-to-top").css({opacity: '1'});

		}else{
			$(".web-title").css({bottom: '30%'});
			$(".web-item").css({top: '20%'});
			$(".nav-header").removeClass("nav-header-shrink");
			$("#logo").attr('src', 'image/home/logo.png');
			$(".back-to-top").css({opacity: '0'});
		}
	 });
});