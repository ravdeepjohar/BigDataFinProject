var hasClass = function (element, className) {
	return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ');
},	
removeClass = function (element, removeClass) {
	var regex = new RegExp('(?:^|\\s)' + removeClass + '(?!\\S)');
	element.className = element.className.replace(regex, '' );
};

document.addEventListener('DOMContentLoaded', function() {
	var btns = document.querySelectorAll('.btn'),
	addFocus = function(btn) { btn.className += ' focus'; },
	removeFocus = function(btn) { removeClass(btn, 'focus'); },
	isPage = function(page) { return window.location.href.indexOf(page) > -1; };

	for (var i = btns.length - 1; i >= 0; i--) {
		// I guess this kind of for-loop is faster
		// And I don't really need to use the iterator so why not?
		btns[i].addEventListener('mousedown', function() { addFocus(this); }, false);
		btns[i].addEventListener('mouseup', function() { removeFocus(this); }, false);
		btns[i].addEventListener('mouseout', function() { removeFocus(this); }, false);
	};

	if (isPage('stock')) ;
	else if (isPage('profile')) profilePage();
	else indexPage();
});

// @prepros-append index.js
// @prepros-append profile.js