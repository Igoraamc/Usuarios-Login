var services = {
	settings : {
		"async": true,
		"url": "",
		"type": "POST",
		"data": ""
	},
	settingsGet : {
		"async": true,
		"url": "",
		"type": "GET"
	},
	logar : function(object, callback) {
		services.settings.url = "https://reqres.in/api/login";
		services.settings.data = object;

		$.ajax(services.settings).done(function(response) {
			callback(response);
		});
	},
	listaDeUsuarios : function(callback) {
		services.settingsGet.url = "https://reqres.in/api/users";

		$.ajax(services.settingsGet).done(function(response) {
			callback(response);
		});
	},
	pegarUsuario : function(userId, callback) {
		services.settingsGet.url = "https://reqres.in/api/users/"+userId;

		$.ajax(services.settingsGet).done(function(response) {
			callback(response);
		});
	}
}