let verificarLogin = function() {
	let expires = localStorage.getItem('expires');

	if(expires) {
		let atualD = new Date();
		let expiresD = new Date(expires);
		let min = expiresD.getMinutes() + 20;

		expiresD.setMinutes(min);
		if(atualD > expiresD) {
			localStorage.removeItem('token');
			localStorage.removeItem('expires');

			window.location.href = 'login.html';
		}
	}else {
		window.location.href = 'login.html';
	}
}
let validaEmail = function() {
	let email = $('#email').val();
	let valid_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
	let valid;

	if(email == "") {
		$('#email').addClass('error');
		valid = false;
	}else {
		$('#email').removeClass('error');
		valid = true;
	}

	let emailValido = valid_email.test(email);

	if(!emailValido) {
		$('#email').addClass('error');
		valid = false;
	}

	return valid;
}
let validaSenha = function() {
	let senha = $('#senha').val();
	let valid;

	if(senha == "") {
		$('#senha').addClass('error');
		valid = false;
	}else {
		$('#senha').removeClass('error');
		valid = true;
	}

	return valid;
}
let validaLogin = function() {
	let valid;
	if(validaEmail() && validaSenha()) {
		valid = true;
	}else{
		valid = false;
	}

	return valid;
}
let callbackLogin = function(response) {
	let token = response.token;

	let d = new Date();
	let min = d.getMinutes() + 20;
	d.setMinutes(min);

	localStorage.setItem('token', token);
	localStorage.setItem('expires', d.toUTCString());
}