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
			$("#logo").attr('src', 'image/home/logo1.png');
		}else{
			$(".nav-header").removeClass("nav-header-shrink");
			$("#logo").attr('src', 'image/home/logo.png');
		}
	 });
});