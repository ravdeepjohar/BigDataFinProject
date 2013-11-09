var indexPage = function() {
	var signingBox = document.querySelector('#js-signing-box'),
		confirmPassword = document.querySelector('#js-confirm-password'),
		signUp = document.querySelector('#js-sign-up'),
		inputs = document.querySelectorAll('.fancy-input'),

	signUpClicked = function(btn) {
		if (!signUp.hasAttribute('data-clicked')) {
			signUp.setAttribute('data-clicked', 0);
			signingBox.className += ' signup';
			signUp.value = 'Cancel';
			removeClass(confirmPassword, 'hide');
		} else {
			signUp.removeAttribute('data-clicked');
			removeClass(signingBox, 'signup');
			signUp.value = 'Sign Up';
			confirmPassword.className += ' hide';
		}
	},

	isPossibleEmail = function(email) {
		var noSpaces = email.indexOf(" ");
		var atSign = email.indexOf("@");
		var dotExists;
		if (atSign > -1 && noSpaces === -1) {
			dotExists = email.substring(atSign).indexOf(".");
			if (dotExists > -1) {
				return true;
			}
		}
		return false;
	},

	passwordsMatch = function() {
		return document.querySelector('.fancy-input:nth-child(2) input').value === document.querySelector('.fancy-input:nth-child(3) input').value;
	},

	checkPlaceholder = function(input) {
		if(input.querySelector('input').value !== '') {
			if ((input.querySelector('label').getAttribute('data-innerHTML') === 'Email' && isPossibleEmail(input.querySelector('input').value) === true) ||
				(input.querySelector('label').getAttribute('data-innerHTML') === 'Password' && input.querySelector('input').value.length > 3) ||
				(input.querySelector('label').getAttribute('data-innerHTML') === 'Confirm Password' && passwordsMatch()))  {
				input.querySelector('label').innerHTML = '';
				input.querySelector('label.error').style.opacity = 0;
			} else {
				input.querySelector('label').innerHTML = '';
				input.querySelector('label.error').style.opacity = 1;
			}
		} else {
			input.querySelector('label').innerHTML = input.querySelector('label').getAttribute('data-innerHTML');
			input.querySelector('label.error').style.opacity = 0;
		}
	};

	for(var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('change', function() { checkPlaceholder(this); }, false);
	}
	signUp.addEventListener('click', function() { signUpClicked(this); }, false);
};