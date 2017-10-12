$(document).ready(function(){
  $('.slider-cont').slick({
  	autoplay: true,
  	pauseOnHover: false,
  	autoplaySpeed: 1000
  });
});
let $btnTop = $("#btn-top");

let $headerMenuOffSetH = document.getElementById("header-menu").offsetHeight;
let $mainSlideOffSetH = document.getElementById("main-slide").offsetHeight;
let $aboutSlideOffSetH = document.getElementById("about-slide").offsetHeight;
let $specificationsSlideOffSetH = document.getElementById("specifications-slide").offsetHeight;
let $photoSlideOffSetH = document.getElementById("photo-slide").offsetHeight;

console.log($headerMenuOffSetH,
$mainSlideOffSetH,
$aboutSlideOffSetH,
$specificationsSlideOffSetH,
$photoSlideOffSetH);

let $container = document.getElementById("container");

let $arrOfLink = $(".scroll");
let arrOfLink = Array.from($arrOfLink);

console.log(arrOfLink);

for(let i = 0; i < arrOfLink.length; i++) {
	arrOfLink[i].addEventListener('click', linkScroll);
}

function linkScroll(ev) {
	ev.preventDefault();

	if(ev.target.hash === "#about-slide") {
		$('html, body').animate({
			scrollTop: $headerMenuOffSetH +  $mainSlideOffSetH
		});
	}

	if(ev.target.hash === "#specifications-slide") {
		$('html, body').animate({
			scrollTop: $headerMenuOffSetH +  $mainSlideOffSetH + $aboutSlideOffSetH
		});
	}

	if(ev.target.hash === "#photo-slide") {
		$('html, body').animate({
			scrollTop: $headerMenuOffSetH +  $mainSlideOffSetH +$aboutSlideOffSetH + $specificationsSlideOffSetH
		});
	}

	if(ev.target.hash === "#buy-now-slide") {
		$('html, body').animate({
			scrollTop: $headerMenuOffSetH +  $mainSlideOffSetH + $aboutSlideOffSetH + $specificationsSlideOffSetH + $photoSlideOffSetH
		});
	}

	if(ev.target.hash === "#contact-slide") {
		$('html, body').animate({
			scrollTop: $headerMenuOffSetH +  $mainSlideOffSetH + $aboutSlideOffSetH + $specificationsSlideOffSetH + $photoSlideOffSetH
	});
	}
}

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