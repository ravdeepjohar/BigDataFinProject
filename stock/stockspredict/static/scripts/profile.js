var profilePage = function() {
	var removeBtns = document.querySelectorAll('.stocksTable-remove');

	for (var i = 2; i < removeBtns.length; i++) {
		removeBtns[i].addEventListener('click', function() {
			this.parentNode.parentNode.deleteRow(i-3);
			// -1 because 0 indexed, -2 to compensate for tbody and tfoot
		}, false);
	};
};