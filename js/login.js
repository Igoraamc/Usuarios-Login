let verificarLogin = function() {
	let expires = localStorage.getItem('expires');

	if(expires) {
		let atualD = new Date();
		let expiresD = new Date(expires);
		
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
let getAllUsers = function() {
	let users_array = [];
	let addUsersToArray = function(response) {
		let data = response;
		let user;

		for (var i = 0; i < data.data.length; i++) {
			user = data.data[i];
			user.id = String(user.id);
			users_array.push(user);
		}
	}
	let sortArray = function(a, b) {
		return a.id-b.id;
	}

	for (var i = 0; i < 4; i++) {
		services.listaDeUsuarios((i + 1), addUsersToArray);
	}
	debugger;
	users_array.sort(sortArray);

	return users_array;
}
let logout = function() {
	localStorage.removeItem('token');
	localStorage.removeItem('expires');

	window.location.href = "login.html";
}