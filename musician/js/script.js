var $btnTop = $("#btn-top");
var $content = $("#content");
var $burgMenu = $("#burg-menu");
var $content = $("#content");
var $nav = $(".nav-bar");

$(window).on("scroll", function(){
	if ($(this).scrollTop() >= 100) {
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function() {
	$("html, body").animate({scrollTop:0}, 300)
	// console.log("re");
});

$burgMenu.on("click", function(ev){
	ev.stopPropagation();
	if (ev.currentTarget === this) {
		$nav.fadeToggle(100);
	} else return;
});

$nav.on("click", function(){
	$nav.fadeToggle(100);
});
