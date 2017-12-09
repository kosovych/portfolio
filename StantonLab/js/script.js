var sliderWrapSize = document.getElementById('size-wrap');
var rangeControlSize = document.getElementById('range-control-size');
var rangeSizeValue =document.getElementById('range-control-size-value');

var sliderWrapPrice = document.getElementById('price-wrap');

var rangeControlPrice = document.getElementById('range-control-price');

var rangePriceValue =document.getElementById('range-control-price-value');


rangeControlSize.onmousedown = moveRangeSize;

function moveRangeSize(e) {
	var thumbCoords = getCoords(rangeControlSize);
	var shiftX = e.pageX - thumbCoords.left;

	var sliderCoords = getCoords(sliderWrapSize);

	document.onmousemove = function(e) {
		var newLeft = e.pageX - shiftX - sliderCoords.left;

		if (newLeft < 0) {
			newLeft = 0;
		}
		var rightEdge = sliderWrapSize.offsetWidth - rangeControlSize.offsetWidth;
		if (newLeft > rightEdge) {
			newLeft = rightEdge;
		}

		rangeControlSize.style.left = newLeft + 'px';
		rangeSizeValue.innerHTML = (newLeft*2.2883).toFixed() + ' m<sup><small>2</small></sup></span>';
	}

	document.onmouseup = function() {
		document.onmousemove = document.onmouseup = null;
	};

	return false; // disable selection start (cursor change)
};

rangeControlSize.ondragstart = function() {
	return false;
};

function getCoords(elem) { // кроме IE8-
	var box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};

}

rangeControlPrice.onmousedown = moveRangePrice;

function moveRangePrice(e) {
	var thumbCoords = getCoords(rangeControlPrice);
	var shiftX = e.pageX - thumbCoords.left;

	var sliderCoords = getCoords(sliderWrapPrice);

	document.onmousemove = function(e) {
		var newLeft = e.pageX - shiftX - sliderCoords.left;

		if (newLeft < 0) {
			newLeft = 0;
		}
		var rightEdge = sliderWrapPrice.offsetWidth - rangeControlPrice.offsetWidth;
		if (newLeft > rightEdge) {
			newLeft = rightEdge;
		}

		rangeControlPrice.style.left = newLeft + 'px';
		rangePriceValue.innerHTML ='&#x20AC; ' + (newLeft * 11.4187643020595 + 10).toFixed() + '000';
	}

	document.onmouseup = function() {
		document.onmousemove = document.onmouseup = null;
	};

	return false; // disable selection start (cursor change)
};

rangeControlSize.ondragstart = function() {
	return false;
};

function getCoords(elem) { // кроме IE8-
	var box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}

var mapBtn = document.getElementById('location');
var optionsCont = document.querySelector('.options');
var propertyCont = document.querySelector('.property');

var modal = document.getElementById('modal-wrap');
var closeModalBtn = document.getElementById('close-modal');


mapBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

function openModal(ev){
	ev.preventDefault();
	modal.classList.add('display');
	optionsCont.classList.add('blur');
	propertyCont.classList.add('blur');
	google.maps.event.trigger(map, 'resize');
}

function closeModal(ev) {
	ev.preventDefault();
	modal.classList.remove('display');
	optionsCont.classList.remove('blur');
	propertyCont.classList.remove('blur');
}

// AIzaSyBnbBOPjERVE7DUgZY3PnabhHLEnSWqMJQ
var zoomLevelInc = document.getElementById('level-inc');
var zoomLevel = 4;

zoomLevelInc.onclick = function() {
	zoomLevel++;
	initMap();
}


function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: zoomLevel,
	    center:{lat: -20.730610, lng:  -73.935242},
	    zoomControl: true,
		  mapTypeControl: false,
		  scaleControl: false,
		  streetViewControl: false,
		  rotateControl: false,
		  fullscreenControl: false
		  });

var marker = new google.maps.Marker({
	position:{lat: -20.730610, lng:  -73.935242},
	map: map,
	draggable: true
});

var searchBox = new google.maps.places.SearchBox(document.getElementById('location-input'));

google.maps.event.addListener(searchBox, 'places_changed', function  () {
	var places = searchBox.getPlaces();

	var bounds = new google.maps.LatLngBounds();

	var i, place;

	for(i=0; place=places[i]; i++) {
		bounds.extend(place.geometry.location);
		marker.setPosition(place.geometry.location)
	}

	map.fitBounds(bounds);
	map.setZoom(8);

});
}


console.log(map);

