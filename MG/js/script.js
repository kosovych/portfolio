////////////////////
////////MENU////////
////////////////////


var openMenuBtn = document.querySelector('.menu');
var menuTitle = document.querySelector('.menu-title');
var closeMenuBtn = document.querySelector('.close-menu');
var menuLink = document.querySelectorAll('.menu li');
var menuLinkArr = Array.from(menuLink);


openMenuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);

// display-none
// display

function openMenu (ev) {
	closeMenuBtn.classList.add('display');
	openMenuBtn.classList.add('menu-open');
	menuTitle.classList.add('display-none');
	console.dir(menuLinkArr);
	for(let i = 0; i < menuLinkArr.length; i++) {
		menuLinkArr[i].classList.add('display');
	}
}

function closeMenu (ev) {
	console.log(ev);
	console.log('ky');
	closeMenuBtn.classList.remove('display');
	openMenuBtn.classList.remove('menu-open');
	menuTitle.classList.remove('display-none');
	for(let i = 0; i < menuLinkArr.length; i++) {
		menuLinkArr[i].classList.remove('display');
	}
}

////////////////////
////////POPUP///////
////////////////////

var popup = document.querySelector('.popup');


var closePopupBtn = document.querySelector('.close-popup');
var openPopupBtn = document.querySelector('.reg-btn');


closePopupBtn.addEventListener('click', closePopup);
openPopupBtn.addEventListener('click', openPopup);

function closePopup (ev) {
	ev.preventDefault();
	popup.classList.remove('display');
}

function openPopup (ev) {
	ev.preventDefault();
	popup.classList.add('display');
}

window.onload = function() {
	var timer = document.querySelector('.seconds');

	var timerSec = timer.innerHTML;

	var timerId = setInterval(()=>{
		timerSec = timerSec - 1;
		timer.innerHTML = timerSec;
		console.log(timer.innerHTML);
		if(timerSec === 0) {
			clearTimeout(timerId);
			openPopupBtn.disabled = true;
		}
	}, 1000);
}


////////////////////
////////COROUSEL////
////////////////////



var curouselBtn = document.querySelector('.cases-btn');

var curouselImg = document.querySelectorAll('.corousel-slide img');

var curouselImgArr = Array.from(curouselImg);

var widthStart = 100 / 7;

var progres = document.querySelector('.progres');

console.dir(progres);

console.dir(curouselImgArr);

var curouselCount = 0;

curouselBtn.addEventListener('click', move);

function move (ev) {
	curouselImgArr[curouselCount].classList.add('to-top');
	curouselCount = curouselCount + 1;
	progres.style.width = widthStart * (curouselCount + 1) + '%';
	if(curouselCount === 6) {
		curouselBtn.classList.add('event-none');
	}
}
